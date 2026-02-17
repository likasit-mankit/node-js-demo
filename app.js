// CommonJS
// const calculator = require("./calculator");

// ES6
// import { add, Pi } from "./calculator.js";

// os (operating system)
const os = require("os");

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Architecture: ${os.arch()}`);
console.log(`OS CPU: ${os.cpus().length}`);
console.log(`OS Total Memory: ${os.totalmem()}`);
console.log(`OS Free Memory: ${os.freemem()}`);
console.log(`OS Uptime: ${os.uptime()}`);
console.log(`OS User Info: ${os.userInfo().username}`);
