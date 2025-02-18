process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const arrayLength = Number(lines[0]);
  const numberArray = lines[1].split(" ").map(Number);

  const numbersSet = new Set(numberArray);

  console.log(...numbersSet);
});
