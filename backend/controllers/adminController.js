const db = require("../config/db");

// GET USERS (no admin)
function getAllUsers(req, res) {
  db.query(
    "SELECT id,name,email,role,status FROM users WHERE role!='ADMIN'",
    (err, rows) => {
      if (err) return res.json([]);
      res.json(rows);
    }
  );
}

module.exports = { getAllUsers };
