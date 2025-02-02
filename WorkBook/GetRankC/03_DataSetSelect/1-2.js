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
  const arraySize = Number(lines[0]);
  const numbers = lines[1].split(" ").map(Number);
  const queryCount = Number(lines[2]); //検索の数がクエリ
  const queries = lines[3].split(" ").map(Number);

  const results = queries.map((index) => numbers[index - 1]);
  console.log(results.join("\n"));

  // for(let i=0; i<indexNumbers; i++){
  //     const index = indexes[i]-1
  //     console.log(numbers[index]);
  // }

  // console.log(indexes);
});
