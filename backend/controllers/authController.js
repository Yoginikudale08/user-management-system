const db = require("../config/db");
const bcrypt = require("bcryptjs");

// REGISTER
function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "All fields required" });
  }

  const hash = bcrypt.hashSync(password, 10);

  const sql =
    "INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, 'USER', 'ACTIVE')";

  db.query(sql, [name, email, hash], (err) => {
    if (err) return res.json({ message: "User already exists" });
    res.json({ message: "Registered successfully" });
  });
}

// LOGIN
function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ message: "Email & password required" });

  db.query("SELECT * FROM users WHERE email=?", [email], (err, rows) => {
    if (rows.length === 0)
      return res.json({ message: "User not found" });

    const user = rows[0];

    if (user.status !== "ACTIVE")
      return res.json({ message: "Account disabled" });

    if (!bcrypt.compareSync(password, user.password))
      return res.json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      role: user.role,
      name: user.name,
      email: user.email
    });
  });
}

module.exports = { register, login };
