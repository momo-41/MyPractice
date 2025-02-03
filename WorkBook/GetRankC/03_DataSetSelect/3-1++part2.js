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
  const number = Number(lines[0]);
  const targetNumbers = lines[1].split(" ").map(Number);

  const frequency = targetNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // undefinedの時は0を指定
    return acc; //reduceでループ処理をするために最新のaccをreturnで返している。reduceは targetNumbers.length の数だけ繰り返す。
  }, Array(10).fill(0));

  console.log(frequency.join(" "));
});
