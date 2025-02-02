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
  const [height, width, row, col] = lines[0].split(" ").map(Number);
  const mazeGrid = lines.slice(1, height + 1); //slice(start, end)

  const targetSell = mazeGrid[row - 1][col - 1];

  console.log(targetSell === "#" ? "Yes" : "No");
});
