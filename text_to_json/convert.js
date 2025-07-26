const fs = require("fs");
const path = require("path");
const inputFile = path.join(__dirname, "user.txt");
const outputFile = path.join(__dirname, "user.json");
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }
  const lines = data.split("\n");
  const result = {};

  lines.forEach((line) => {
    const [key, value] = line.trim().split("=");
    if (key && value !== undefined) {
      if (value === "true") result[key] = true;
      else if (value === "false") result[key] = false;
      else if (!isNaN(Number(value))) result[key] = Number(value);
      else result[key] = value;
    }
  });
  fs.writeFile(outputFile, JSON.stringify(result, null, 2), (err) => {
    if (err) {
      return console.error("Error writing JSON file:", err);
    }
    console.log("Conversion complete! Output saved to user.json");
  });
});