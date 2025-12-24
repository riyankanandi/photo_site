const express = require("express");
// const pool = require("../db/postgres");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { title, category } = req.body;
  await pool.query(
    "INSERT INTO albums (title, category) VALUES ($1,$2)",
    [title, category]
  );
  res.json({ message: "Album created" });
});

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM albums");
  res.json(result.rows);
});

module.exports = router;
