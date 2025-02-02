//高速な標準入力を使う（競技プログラミング向け）
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

console.log(input); // 入力データを配列として取得
