import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/utils/db.js";
import companiesRouter from "./src/routes/companies.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// DB connect
await connectDB();

// Routes
app.use("/api/companies", companiesRouter);

// Health check
app.get("/", (req, res) => res.send("Companies API running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
