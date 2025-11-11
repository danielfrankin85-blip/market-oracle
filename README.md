# Market Oracle - Smart Investment Predictor

A real-time investment analysis platform that provides AI-powered market insights, trend detection, and probability-based predictions for stocks and cryptocurrencies.

## Features

- 📊 Real-time market data from Yahoo Finance
- 🤖 AI-powered trend analysis and predictions
- 📈 Technical indicators (RSI, MACD, Moving Averages)
- 🔔 Smart alerts for high-confidence opportunities
- 💼 Personalized watchlist with persistent storage
- 🎯 AutoTrader AI Top Picks
- 👤 User accounts with local storage

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Data Source**: Yahoo Finance API

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser to `http://localhost:3001`

## Deployment

This app is ready to deploy to:
- **Render** (Recommended - Free tier available)
- **Railway** (Free tier available)
- **Heroku** (Paid plans)
- **Vercel** (With serverless functions)

### Deploy to Render (Free)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) and sign up
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: market-oracle (or your choice)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. Click "Create Web Service"
7. Your site will be live at `https://your-app-name.onrender.com`

### Deploy to Railway

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app) and sign up
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js and deploys
6. Your site will be live automatically

## Environment Variables

No environment variables required! The app works out of the box.

## License

MIT

