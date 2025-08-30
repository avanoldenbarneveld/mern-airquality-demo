import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// GET /api/airquality?lat=42.8169&lon=-1.6432
router.get("/", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing required query parameters: lat, lon" });
  }

  try {
    const response = await fetch(
      `https://api.openaq.org/v3/locations?coordinates=${lat},${lon}&radius=10000&limit=1`,
      { headers: { "X-API-Key": process.env.OPENAQ_API_KEY } }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from OpenAQ" });
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      return res.status(404).json({ error: "No monitoring stations found" });
    }

    const station = data.results[0];

    // Clean response
    const simplified = {
      location: station.name,
      country: station.country?.name,
      measurements: station.sensors.map(s => ({
        parameter: s.parameter.displayName,
        unit: s.parameter.units,
        sensor: s.name,
      })),
    };

    res.json(simplified);
  } catch (err) {
    console.error("[airquality] error:", err);
    res.status(500).json({ error: "Server error fetching air quality" });
  }
});

export default router;
