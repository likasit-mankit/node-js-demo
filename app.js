const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.end("Hello World");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.statusCode = 404;
    res.end("ไม่พบหน้าเว็บ");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
