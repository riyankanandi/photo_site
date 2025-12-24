const express = require("express");
// const pool = require("../db/postgres");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, booking_type, event_date, message } = req.body;

  await pool.query(
    `INSERT INTO bookings
     (name,email,phone,booking_type,event_date,message)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [name, email, phone, booking_type, event_date, message]
  );

  res.json({ message: "Booking submitted" });
});

router.get("/", auth, async (req, res) => {
  const result = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  res.json(result.rows);
});

router.put("/:id", auth, async (req, res) => {
  const { status } = req.body;
  await pool.query(
    "UPDATE bookings SET status=$1 WHERE id=$2",
    [status, req.params.id]
  );
  res.json({ message: "Status updated" });
});

module.exports = router;
