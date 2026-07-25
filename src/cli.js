// provides tools to read data line-by-line
import readline from "readline";

// createInterface() to open a communication channel between Node.js and your terminal
// input: process.stdin: Connects the interface to standard input (your keyboard typing)
// output: process.stdout: Connects the interface to standard output (printing text to your terminal screen)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default rl;
