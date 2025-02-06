// Objectでkeyとvalueを持たせて、並び替えをする

process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const targetStrings = lines.slice(1);
  const stringCountObj = {}; // Object

  for (const string of targetStrings) {
    stringCountObj[string] = (stringCountObj[string] || 0) + 1;
  }

  // `Object.entries()` を使ってソートし、出力
  Object.entries(stringCountObj)
    .sort(([wordA], [wordB]) => wordA.localeCompare(wordB)) // 辞書順ソート
    .forEach(([word, count]) => {
      console.log(`${word} ${count}`);
    });
});
// Object.entriesをすることにより、オブジェクトが配列リストに変わる
// (これをすることにより要素の順番が決められ、sortなどができる)
// { bcd: 4, abc: 1 } → [[ "bcd" , 4 ],[ "abc" , 1 ]]
// localeCompare は、ロケール（言語・文化に合わせた順番）に基づいて比較することができる
// (アルファベット順に比較して並び替えるメソッド)

// Mapは[ 'bcd', 4 ] [ 'abc', 1 ]のような形で値を持っている
// Objectは{ bcd: 4, abc: 1 }のような形で値を持っている
// Mapのとき、valueを取得するには 関数(key) で取得できる
// Objectのとき、valueを取得するには 関数[key] で取得できる
