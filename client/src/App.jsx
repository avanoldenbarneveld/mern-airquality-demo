import { useEffect, useState } from "react";
import { listItems } from "./api";

export default function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    listItems()
      .then(setItems)
      .catch(err => setError(err.message));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Items</h1>
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
    </main>
  );
}
