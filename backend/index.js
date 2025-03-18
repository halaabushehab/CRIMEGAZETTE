const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
require("dotenv").config();


const subscriptionRoutes = require("./routers/subscriptionRoutes");
const paymentRoutes = require("./routers/paymentRoutes");

const userRoutes = require("./routers/userRoutes");
const messageroutes = require("./routers/messageroutes");
const app = express();

// Connect to the database
connectDB();



// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:8080",
  "http://localhost:5174",
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

// 
app.use("/api/users", userRoutes);
app.use("/app", messageroutes);

app.use("/api", subscriptionRoutes);
app.use("/api", paymentRoutes);


// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
