import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { Item } from "./models/Items.js";
import airQualityRoutes from "./routes/airquality.js";

const app = express();

app.use(cors({
  origin: "https://inbiot-fullstack-test.vercel.app"
}));

app.use(express.json());

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Items endpoints

// GET /api/items → list all items
app.get("/api/items", async (_req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/items → create new item (requires "name")
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

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server] running at http://localhost:${PORT}`);
  });
});
