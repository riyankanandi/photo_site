const express = require("express");
// const pool = require("../db/postgres");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { album_id, image_url } = req.body;

  await pool.query(
    "INSERT INTO photos (album_id, image_url) VALUES ($1,$2)",
    [album_id, image_url]
  );

  res.json({ message: "Photo added" });
});

router.get("/:albumId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM photos WHERE album_id=$1",
    [req.params.albumId]
  );
  res.json(result.rows);
});

module.exports = router;
