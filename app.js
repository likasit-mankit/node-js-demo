const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users");

// middleware สำหรับบันทึกข้อมูล 
const loggerMiddleware = (req, res, next) => {
  console.log(`Request received at ${new Date().toISOString()}`);
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello express! main page");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
