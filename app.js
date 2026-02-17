// CommonJS
// const calculator = require("./calculator");

// ES6
// import { add, Pi } from "./calculator.js";

// file system
const fs = require("fs");

const content = "Hello Node.js!";

fs.writeFile("goodbye.txt", content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully");
});