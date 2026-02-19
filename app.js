const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

const usersRouter = require("./routes/users");

app.use(express.static(path.join(__dirname, 'public')));

// middleware สำหรับบันทึกข้อมูล 
const loggerMiddleware = (req, res, next) => {
  console.log(`Request received at ${new Date().toISOString()}`);
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
};

app.use(loggerMiddleware);


app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
