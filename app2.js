const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");

  // res.statusCode + res.setHeader >> easy way to res.writeHead
  // res.writeHead(200, { "Content-Type": "application/json" });

  // Read data form URL 
  // path : /user/ 
  // Query String : ?name=John&age=30
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  const userAgent = req.headers["user-agent"] || "ไม่ได้ระบุ";
  res.end(`userAgent ของคุณคือ : ${userAgent}`);

})
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
