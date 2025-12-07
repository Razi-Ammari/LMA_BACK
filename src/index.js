import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import assistantRoutes from "./routes/assistant.routes.js";

// Load environment variables
dotenv.config();

// Debug: Check if env variables are loaded
console.log("🔍 Environment check:");
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("MONGODB_URI value:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);

// Initialize app
const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/assistant", assistantRoutes);

app.get("/", (req, res) => {
  res.send("LMA DocGuide API running");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
