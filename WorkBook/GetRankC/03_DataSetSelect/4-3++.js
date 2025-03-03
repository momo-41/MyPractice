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
  const arrayLength = Number(lines[0]);
  const array = lines[1].split(" ").map(Number);

  const seenNumbers = new Set();
  for (let index = 0; index < arrayLength - 1; index++) {
    seenNumbers.add(array[index]); // 1 2 3 2 5 3 3 10 2
    // console.log(array[index]);
    console.log(seenNumbers.has(array[index + 1]) ? "Yes" : "No");
    // 次のindexの数字が今までの配列の中に含まれているか確かめる
  }
});

// Set.has()は探索に時間がかからない
// Array.includes()は線形探索で0番目から一つずつ探索するため、探索に時間がかかる
