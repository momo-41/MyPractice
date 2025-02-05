// 文字のUnicodeを取得してindexを計算する方法
// この方法のが計算コストがかからない

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
  const inputString = lines[1].split("");

  const letterCountArray = Array(26).fill(0);

  for (const letter of inputString) {
    const index = letter.charCodeAt(0) - "a".charCodeAt(0);
    letterCountArray[index]++;
  }

  console.log(letterCountArray.join(" "));
});

// charCodeAt(チャーコードアット)
// charCodeAt関数はその文字のUnicode(割り振られた数字)を「10進数」で返す関数
// aのUnicodeは97
// letter.charCodeAt(0) - "a".charCodeAt(0);
// 上記のコードではletterがbでcharCodeAtで変換すると98になる。そこでaのUnicodeの97を引くとindexは1になる
// そのindexを使ってletterCountArrayでアルファベットの数をカウントしている
