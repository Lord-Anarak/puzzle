import express from "express";
import connectDB from "./config/connctDB.js";
import userRoute from "./routes/userRoute.js";
import puzzleRoute from "./routes/puzzleRoute.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Front end static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("/api/users", userRoute);
app.use("/api/puzzle", puzzleRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
