const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/bookings");
const albumRoutes = require("./routes/albums");
const photoRoutes = require("./routes/photos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/photos", photoRoutes);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend connected 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});


// app.listen(process.env.PORT, () =>
//   console.log("Server running on port", process.env.PORT)
// );
