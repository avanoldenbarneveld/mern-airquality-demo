import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// GET /api/airquality → test call to OpenAQ v3 (returns 1 location)
router.get("/", async (_req, res) => {
  try {
    const response = await fetch(
      "https://api.openaq.org/v3/locations?limit=1",
      {
        headers: {
          "X-API-Key": process.env.OPENAQ_API_KEY,
        },
      }
    );

    console.log("[OpenAQ] status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      return res
        .status(response.status)
        .json({ error: "Failed to fetch from OpenAQ", details: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("[airquality] error:", err);
    res.status(500).json({ error: "Server error fetching air quality" });
  }
});

export default router;
