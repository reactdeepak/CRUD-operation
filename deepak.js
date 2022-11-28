const fileSystem = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "");
const filePath = `${dirPath}/python.txt`;

fileSystem.writeFile(filePath, "Hello World", (err) => {
  if (err) throw err;
  console.log("write complete");
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error ${err}`);
  process.exit(1);
});
fileSystem.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fileSystem.appendFile(filePath, " Python is cool", (err) => {
  if (!err) console.log("file has been updated");
});

fileSystem.writeFileSync(filePath, "Node js is Anand's favorite");

fileSystem.rename(filePath, `${dirPath}/javascript.txt`, (err) => {
  if (!err) console.log("file name is updated");
});

fileSystem.unlinkSync(`${dirPath}/javascript.txt`);
