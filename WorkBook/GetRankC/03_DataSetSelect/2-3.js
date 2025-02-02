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
  const rowNumber = Number(lines[0].split(" ")[0]);
  const columnNumber = Number(lines[0].split(" ")[1]);
  const mazeArray = [];

  for (let i = 1; i <= rowNumber; i++) {
    mazeArray.push(lines[i].split(""));
  }

  const targetRow = Number(lines[0].split(" ")[2]) - 1;
  const targetColumn = Number(lines[0].split(" ")[3]) - 1;

  if (mazeArray[targetRow][targetColumn] === "#") {
    console.log("Yes");
  } else if (mazeArray[targetRow][targetColumn] === ".") {
    console.log("No");
  }

  // console.log(mazeArray[targetRow][targetColumn]);
  // console.log(mazeArray[targetRow]);
  // console.log(targetRow,targetColumn);
});
