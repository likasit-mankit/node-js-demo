import express from "express";

const app = express();

app.get("/", (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    res.send({ resualt: x + y });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});