const express = require("express");
const cors = require("cors");
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Routes
app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);

// Start server (LAST)
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
