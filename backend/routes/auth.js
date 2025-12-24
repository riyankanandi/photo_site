const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const pool = require("../db/postgres");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM admins WHERE username=$1",
    [username]
  );

  if (result.rows.length === 0)
    return res.status(401).json({ message: "Invalid credentials" });

  const admin = result.rows[0];
  const match = await bcrypt.compare(password, admin.password);

  if (!match)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: admin.id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;
