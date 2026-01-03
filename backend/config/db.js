const mysql = require("mysql2");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  // put your mysql password if you have
  database: "user_management"
});

// connect to database
db.connect((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database connected");
  }
});

module.exports = db;
