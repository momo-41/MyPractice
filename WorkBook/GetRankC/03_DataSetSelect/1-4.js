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
  const [arraySize, query] = lines[0].split(" ").map(Number);
  const numbers = lines[1].split(" ").map(Number);
  for (let i = 2; i < query + 2; i++) {
    const target = lines[i].split(" ").map(Number);
    if (target[0] === 0) {
      numbers.push(target[1]);
    } else if (target[0] === 1) {
      numbers.pop(target[1]);
    } else {
      console.log(...numbers);
    }
  }
  // console.log(lines[0]);
});
