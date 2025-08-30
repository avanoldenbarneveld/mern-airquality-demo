import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function AirQualityWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchAQ() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API}/api/airquality?lat=42.8169&lon=-1.6432`);
      if (!res.ok) throw new Error("Failed to fetch air quality data");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAQ();
  }, []);

  return (
    <section style={{ marginTop: 20 }}>
      <h3>Air Quality</h3>
      <button onClick={fetchAQ} disabled={loading}>
        {loading ? "Loading…" : "Refresh"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data ? (
        <>
          <h4>{data.location} ({data.country})</h4>
          <ul>
            {data.measurements.map((m, i) => (
              <li key={i}>
                {m.parameter}: {m.sensor} [{m.unit}]
              </li>
            ))}
          </ul>
        </>
      ) : (
        !loading && <p>No data available</p>
      )}
    </section>
  );
}
