import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Minimal Yahoo Finance proxy to avoid browser CORS
// No API key needed. This server runs on Node 18+ (native fetch).
const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.static(__dirname));

function buildYahooUrl(symbol, range = "90d", interval = "1d") {
  const now = Math.floor(Date.now() / 1000);
  const days = range.endsWith("d") ? parseInt(range) : 90;
  const period1 = Math.floor((Date.now() - days * 24 * 60 * 60 * 1000) / 1000);
  const period2 = now;
  const encoded = encodeURIComponent(symbol);
  return `https://query1.finance.yahoo.com/v8/finance/chart/${encoded}?period1=${period1}&period2=${period2}&interval=${interval}`;
}

// Normalizes crypto symbols: BTC -> BTC-USD
function normalizeSymbol(input) {
  if (!input) return "";
  const raw = String(input).trim().toUpperCase();
  if (raw.includes("-")) return raw;
  // Heuristic: if 3-5 letters and not clearly a stock, treat as crypto
  if (/^[A-Z]{2,6}$/.test(raw)) {
    // Allow user to pass stocks like AAPL/MSFT unchanged by checking common stock list optionally
    // Default to crypto format if it ends with -USD already
    return raw.endsWith("USD") ? raw : `${raw}-USD`;
  }
  return raw;
}

app.get("/api/chart", async (req, res) => {
  try {
    const { symbol, range = "90d", interval = "1d", assetType } = req.query;
    if (!symbol) {
      return res.status(400).json({ error: "Missing symbol query param" });
    }
    const isCrypto = assetType === "crypto";
    const sym = isCrypto ? normalizeSymbol(symbol) : String(symbol).toUpperCase();
    const url = buildYahooUrl(sym, range, interval);
    const resp = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!resp.ok) {
      return res.status(resp.status).json({ error: `Yahoo responded ${resp.status}` });
    }
    const data = await resp.json();
    res.set("Cache-Control", "public, max-age=60");
    return res.json(data);
  } catch (err) {
    console.error("Backend fetch error:", err);
    return res.status(500).json({ error: "Failed to fetch data", detail: String(err?.message || err) });
  }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, time: Date.now() });
});

app.get("/", (_req, res) => {
  res.sendFile(join(__dirname, "InvestmentGuardian.html"));
});

app.listen(PORT, () => {
  console.log(`Market Oracle backend running on http://localhost:${PORT}`);
  console.log(`Frontend available at http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chart?symbol=AAPL`);
});



