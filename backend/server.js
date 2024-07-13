import express from "express";
import connectDB from "./config/connctDB.js";
import userRoute from "./routes/userRoute.js";
import puzzleRoute from "./routes/puzzleRoute.js";
import cors from "cors";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/puzzle", puzzleRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
