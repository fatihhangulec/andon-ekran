const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// CORS ayarları
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

app.post('/topla', (req, res) => {
  const { sayilar } = req.body;

  if (!sayilar || !Array.isArray(sayilar)) {
    return res.status(400).json({ error: 'Geçersiz istek formatı' });
  }

  const toplam = sayilar.reduce((acc, num) => acc + num, 0);

  res.json({ toplam });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
