import "dotenv/config";
import express from "express";
import cors from "cors";
import { Item } from "./models/Items.js";
import airQualityRoutes from "./routes/airquality.js";

const app = express();

// CORS: configurable via env var (CORS_ORIGIN), defaults to localhost
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  })
);

app.use(express.json());

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Items endpoints
app.get("/api/items", async (_req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/items", async (req, res) => {
  try {
    const { name, note } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const item = new Item({ name, note });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Air quality routes
app.use("/api/airquality", airQualityRoutes);

export default app;
