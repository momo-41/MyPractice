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
  const [numProduct, numQueries] = lines[0].split(" ").map(Number);
  const itemMap = new Map();
  const itemList = lines.slice(1, numProduct + 1);

  for (const item of itemList) {
    const [name, price] = item.split(" ");
    itemMap.set(name, Number(price));
  }

  const targetItem = lines.slice(numProduct + 1, numProduct + numQueries + 1);

  for (const target of targetItem) {
    console.log(itemMap.get(target) || -1);
  }
});
