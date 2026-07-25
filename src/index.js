import rl from "./cli.js";
import llm from "./llm.js";

function ask(question) {
  return new Promise((resolve) => {
    // question(query, callback) method is used to prompt the user for input in a command-line interface (CLI) application
    // query -> A statement or query to write to `output`, prepended to the prompt
    // callback(resolve in this case) -> A callback function that is invoked with the user's input in response to the `query`
    rl.question(question, resolve);
  });
}

console.log("AI CLI Assistant");
console.log("Type 'exit' to quit.\n");

while (true) {
  const prompt = await ask("You: ");

  if (prompt.trim().toLowerCase() === "exit") {
    console.log("\nGoodbye! 👋");
    break;
  }

  try {
    const stream = await llm.stream(prompt);
    process.stdout.write("\nAI: ");

    for await (const chunk of stream) {
      process.stdout.write(chunk.content);
    }

    console.log("\n");
  } catch (error) {
    console.error("\nError:", error.message);
  }
}

// method closes the Interface instance
rl.close();
