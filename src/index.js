import rl from "./cli.js";
import llm from "./llm.js";
import { showBanner } from "./banner.js";
import chalk from "chalk";
import ora from "ora";
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages"; // conversation history
import { system } from "./prompts/system-message.js"; // system message

showBanner();

// it listens for the SIGINT signal, which is typically sent when the user presses Ctrl+C in the terminal. When this signal is received, the provided callback function is executed.
// In this case, it logs a farewell message, closes the readline interface, and exits the process with a status code of 0 (indicating successful termination).
process.on("SIGINT", () => {
  console.log(chalk.yellow("\n\n👋 Thanks for using AI CLI Assistant!"));
  rl.close();
  process.exit(0);
});

function ask(question) {
  return new Promise((resolve) => {
    // question(query, callback) method is used to prompt the user for input in a command-line interface (CLI) application
    // query -> A statement or query to write to `output`, prepended to the prompt
    // callback(resolve in this case) -> A callback function that is invoked with the user's input in response to the `query`
    rl.question(question, resolve);
  });
}

// initialize conversation history with system message
let conversationHistory = [new SystemMessage({ content: system })];

async function main() {
  try {
    while (true) {
      const prompt = await ask(chalk.green.bold("👤 You > "));
      if (!prompt.trim()) {
        continue; // ignore empty message
      }

      if (prompt.trim().toLowerCase() === "exit") {
        console.log(chalk.yellow("\n👋 Thanks for using AI CLI Assistant!"));
        break;
      }
      // add user prompt to conversation history
      conversationHistory.push(new HumanMessage({ content: prompt }));

      // using spinner to indicate that the AI is processing the user's input
      const spinner = ora({
        text: chalk.blue.bold("AI is thinking..."),
        color: "magenta",
      }).start();

      try {
        // pass conversation history to llm instead of prompt to maintain context in the conversation
        const stream = await llm.stream(conversationHistory);

        // stop the spinner when the AI starts responding
        spinner.succeed("Response generated");
        process.stdout.write(chalk.blue.bold("\n🤖 Assistant >  "));

        // store all chunks to manage chat history
        let fullResponse = "";
        for await (const chunk of stream) {
          fullResponse += chunk.content;
          process.stdout.write(chunk.content);
        }

        // add AI response to conversation history
        conversationHistory.push(new AIMessage({ content: fullResponse }));

        console.log("\n");
      } catch (error) {
        console.error(chalk.red.bold("\nError:"), chalk.red(error.message));
      }
    }
  } finally {
    // Always executed, even if an error occurs
    // method closes the Interface instance
    rl.close();
  }
}

// Start the application
main().catch((err) => {
  console.error(chalk.red.bold("Fatal Error:"), err);
  process.exit(1);
});
