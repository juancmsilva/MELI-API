const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/buscar", async (req, res) => {
  try {
    const q = req.query.q || "eletronicos";
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(q)}&limit=12`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar produtos", details: err.message });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
