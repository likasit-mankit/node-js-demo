const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
