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
  const [initialArraySize, numberOfOperations] = lines[0]
    .split(" ")
    .map(Number);
  const dynamicArray = lines[1].split(" ").map(Number); //初期の配列
  const operations = lines.slice(2); //linesの2(3行目以降)を取り出す

  const outputResults = []; //これは文字列の配列になる ["1 2 3 10 12", "1 2 3 10"]など

  for (const operation of operations) {
    const parts = operation.split(" ");
    const commandType = Number(parts[0]); //0か1か2

    if (commandType === 0) {
      const valueToAdd = Number(parts[1]);
      dynamicArray.push(valueToAdd);
    } else if (commandType === 1) {
      if (dynamicArray.length > 0) dynamicArray.pop();
    } else if (commandType === 2) {
      outputResults.push(dynamicArray.join(" "));
    }
  }

  console.log(outputResults.join("\n"));
});
