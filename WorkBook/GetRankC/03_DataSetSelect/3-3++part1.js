// Mapでkeyとvalueを持たせて、for..ofでカウントする

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
  const stringCountMap = new Map();

  for (const string of targetStrings) {
    stringCountMap.set(string, (stringCountMap.get(string) || 0) + 1);
    // console.log(...stringCountMap)
  }
  // stringCountMapにおいて、stringをkeyとして持って、valueはまだ存在しなかったら0(+1)で、もしすでにvalueがあったらその値を取得して+1をする

  // console.log([...stringCountMap.keys()].sort())

  [...stringCountMap.keys()].sort().forEach((word) => {
    console.log(`${word} ${stringCountMap.get(word)}`);
  });
});

// forEachはコールバック関数であり、for...ofより処理が遅くなる
// forEachはループの途中終了(break)もできず、非同期処理(async/await)も使えない
// 文字列とその個数、をkeyとvalueで持たせている

// stringCountMapは[ 'bcd', 4 ] [ 'abc', 1 ]のような形で値を持っている
// オブジェクトは{ bcd: 4, abc: 1 }
// Mapのとき、valueを取得するには 関数(key) で取得できる
// Objectのとき、valueを取得するには 関数[key] で取得できる
