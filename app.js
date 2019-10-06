  
const express = require('express');
const hbs = require('hbs');
// const mysql = require('mysql');

const path = require('path');

const port = process.env.PORT || 3000;

const app = express();


//express+ hbs stuff
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  console.log('Home page');
  
  res.render('home', {title: "Home"});
})

app.listen(port,  () => {
  console.log(`Server running at ${port}/`);
});


//mysql stuff
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'database name' //edit db name
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

//cmd line to install packages
  //npm i -s express + hbs + mysql
  //npm install dependencies