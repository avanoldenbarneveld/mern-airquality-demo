import { useState, useEffect } from "react";
import { listItems } from "./api";
import NewItemForm from "./components/NewItemForm";
import AirQualityWidget from "./components/AirQualityWidget";

export default function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    listItems().then(setItems).catch(err => setError(err.message));
  }, [refreshKey]);

  return (
    <main style={{ padding: 20 }}>
      <h1>Items</h1>

      <NewItemForm onCreated={() => setRefreshKey(k => k + 1)} />

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {items.map(it => (
            <li key={it._id}>
              <strong>{it.name}</strong> – {it.note}
            </li>
          ))}
        </ul>
      )}

      <AirQualityWidget />
    </main>
  );
}
