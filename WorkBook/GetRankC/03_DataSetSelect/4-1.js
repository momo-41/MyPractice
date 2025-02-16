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
  const [arrayLength, targetNumber] = lines[0].split(" ").map(Number);
  const numberArray = lines[1].split(" ").map(Number);

  const numbersSet = new Set(numberArray);

  console.log(numbersSet.has(targetNumber) ? "Yes" : "No");
  // forループでtargetNumberがnumberArrayに含まれているかどうかを記述しようとしていたが、
  // Setを使うことで、targetNumberがあるかどうかの検索を一回で行うことができるためSetのが効率が良い
});
