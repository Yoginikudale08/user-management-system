const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, "SECRET_KEY_123", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decoded; // { id, role, email }
    next();
  });
}

// ADMIN ONLY
function isAdmin(req, res, next) {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
}

module.exports = { verifyToken, isAdmin };
function login(req, res) {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.json({ message: "Email and password required" });
    }
  
    const sql = "SELECT * FROM users WHERE email = ?";
  
    db.query(sql, [email], (err, result) => {
      if (err) return res.json({ message: "Database error" });
      if (result.length === 0) return res.json({ message: "User not found" });
  
      const user = result[0];
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.json({ message: "Invalid password" });
  
      // 🔐 CREATE TOKEN
      const token = jwt.sign(
        { id: user.id, role: user.role, email: user.email },
        "SECRET_KEY_123",
        { expiresIn: "1h" }
      );
  
      res.json({
        message: "Login successful",
        token,
        role: user.role,
        name: user.name,
        email: user.email
      });
    });
  }
  