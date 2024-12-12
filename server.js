// Importeer de benodigde modules
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Maak een nieuwe Express-app
const app = express();

// Stel de poort in waarop de server draait
const PORT = process.env.PORT || 3000;

// Definieer de URL waarop je proxy moet doorverwijzen
const targetUrl = 'https://example.com';  // Vervang dit door de URL die je wilt proxieren

// Maak een proxy-middleware aan
const proxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
});

// Proxy alle inkomende verzoeken naar de target URL
app.use('/', proxy);

// Start de server
app.listen(PORT, () => {
  console.log(`Proxy-server draait op http://localhost:${PORT}`);
});
