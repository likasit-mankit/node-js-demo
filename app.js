const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

const usersRouter = require("./routes/users");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', heading: 'New Season Arrivals' });
  console.log('homepage is here');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', heading: 'About ModernShop' });
  console.log('aboutpage is here');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
