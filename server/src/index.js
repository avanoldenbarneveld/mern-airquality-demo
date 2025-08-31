import "dotenv/config";
import { connectDB } from "./db.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

// Conectar a la base de datos y arrancar el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server] running at http://localhost:${PORT}`);
  });
});
