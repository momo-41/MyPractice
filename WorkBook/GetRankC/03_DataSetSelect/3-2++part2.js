// アルファベットの配列を手動で作成し、その配列に対するindexを毎回取得して数をカウントしていく方法

process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

reader.on("line", (line) => {
  inputLines.push(line);
});

reader.on("close", () => {
  const stringLength = parseInt(inputLines[0], 10);
  const inputString = inputLines[1];

  const LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("");
  const letterCountArray = Array(26).fill(0);

  // 文字列の各文字をカウント
  for (const letter of inputString) {
    const index = LOWERCASE_ALPHABETS.indexOf(letter); // 'a' → 0, 'b' → 1, ..., 'z' → 25
    // console.log(index);
    if (index !== -1) {
      letterCountArray[index]++;
    }
  }

  console.log(letterCountArray.join(" "));
});

// const index = LOWERCASE_ALPHABETS.indexOf(letter);
// 上記コードでは、LOWERCASE_ALPHABETSの配列に対する、letterの文字('a'など)のindexを取得している
// このコードでは、forループ内で毎回LOWERCASE_ALPHABETSからindexを取得するため、計算コストが高く時間がかかる
