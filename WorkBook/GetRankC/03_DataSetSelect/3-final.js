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
  const [numString, numQuery] = lines[0].split(" ").map(Number);
  const stringList = lines.slice(1, numString + 1);
  const queryList = lines.slice(numString + 1);
  const stringMap = new Map();

  for (let i = 0; i < numString; i++) {
    const string = stringList[i];
    if (!stringMap.has(string)) {
      // もしMapにまだそのstringがなかったらMapに追加をする(同じstringが既にMapにあった場合は追加をしない)
      stringMap.set(string, i + 1);
    }
    // console.log(str);
  }

  for (const query of queryList) {
    console.log(stringMap.get(query) ?? -1);
    // 「??」はnull または undefined の場合のみ -1 に置き換える
    // 「||」はfalsy（偽）な値すべて を -1 に置き換える
  }
  // console.log(...stringMap);
  // console.log(queryList);
});
