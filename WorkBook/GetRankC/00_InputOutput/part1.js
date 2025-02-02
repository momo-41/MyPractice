//複数行の入力を受け取る場合(
//コーディングテストではこれが推奨
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  console.log(inputLines); // 取得した全ての行を処理
});
