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

  const frequency = Array(10).fill(0); //[0,0,0,0,0,0,0,0,0,0]

  for (const num of targetNumbers) {
    frequency[num]++;
  }

  console.log(frequency.join(" "));
});
