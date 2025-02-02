process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const numbers = lines[0].split(" ").map(Number);
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);
  console.log(maxNumber - minNumber);
});
