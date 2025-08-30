const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

console.log("API is", import.meta.env.VITE_API_URL);

export async function listItems() {
  const res = await fetch(`${API}/api/items`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}
