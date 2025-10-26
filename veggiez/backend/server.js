// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Coba route utama
app.get("/", (req, res) => {
  res.send("Server backend VeggieZ berhasil dijalankan 🚀 Letssgoooo🔥");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
