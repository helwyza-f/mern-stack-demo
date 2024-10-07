import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connection.js";

dotenv.config({});

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "https://job-fair-client.vercel.app", // Ganti dengan URL front-end Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Izinkan pengiriman cookie atau authorization header jika diperlukan
  })
);
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port ${PORT}`);
});
