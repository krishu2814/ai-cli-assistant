import chalk from "chalk";

export function showBanner() {
  console.clear();

  console.log(
    chalk.cyan.bold(`
╔════════════════════════════════════════════╗
║          🤖 AI CLI Assistant               ║
║      Powered by LangChain + Groq           ║
╚════════════════════════════════════════════╝
`),
  );

  console.log(chalk.bgBlueBright("Type 'exit' to quit."));
  console.log(chalk.gray("────────────────────────────────────────────"));
  console.log();
}
