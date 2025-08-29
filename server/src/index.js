import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server] running at http://localhost:${PORT}`);
  });
});
