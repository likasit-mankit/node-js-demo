const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const htmlContent = `
    <html>
      <head>
        <title>หน้าแรก</title>
      </head>
      <body>
        <h1>หน้าแรก</h1>
      </body>
    </html>
  `;

  if (req.url === "/") {
    res.end(htmlContent);
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
