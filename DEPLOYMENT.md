# Deployment Guide - Market Oracle

## Quick Deploy Options

### Option 1: Render (Recommended - Easiest & Free)

**Steps:**

1. **Create a GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `market-oracle` or `investment-guardian`
   - Don't initialize with README (you already have one)

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Market Oracle"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Deploy on Render**
   - Go to [render.com](https://render.com) and sign up (free)
   - Click "New +" → "Web Service"
   - Click "Connect GitHub" and authorize Render
   - Select your repository
   - Configure:
     - **Name**: `market-oracle` (or your choice)
     - **Environment**: `Node`
     - **Region**: Choose closest to you
     - **Branch**: `main`
     - **Root Directory**: (leave empty)
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Instance Type**: `Free` (or upgrade later)
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://market-oracle.onrender.com` (or your chosen name)

4. **Done!** Your site is now public! 🎉

---

### Option 2: Railway (Also Free & Easy)

**Steps:**

1. **Push to GitHub** (same as Step 1-2 above)

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app) and sign up
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway and select your repository
   - Railway auto-detects Node.js and starts deploying
   - Wait 1-2 minutes
   - Click on your service → "Settings" → "Generate Domain"
   - Your site is live! 🚀

---

### Option 3: Vercel (For Frontend + Serverless)

**Note:** Requires converting backend to serverless functions. More complex but also free.

---

## Post-Deployment Checklist

✅ Test your live site:
- [ ] Visit your deployed URL
- [ ] Try adding a stock (e.g., AAPL)
- [ ] Try adding crypto (e.g., BTC)
- [ ] Check if data loads correctly
- [ ] Test account creation/login
- [ ] Verify watchlist persistence

## Troubleshooting

**Issue: Site shows "Cannot GET /"**
- Solution: Make sure `server.js` is in the root directory and `startCommand` is `npm start`

**Issue: API calls fail**
- Solution: Check browser console for CORS errors. The backend should handle CORS automatically.

**Issue: Build fails**
- Solution: Ensure `package.json` has correct Node version (>=18) in engines field

**Issue: Site works locally but not deployed**
- Solution: Check Render/Railway logs for errors. Make sure PORT environment variable is set (Render sets this automatically)

## Custom Domain (Optional)

Both Render and Railway support custom domains:
- **Render**: Settings → Custom Domains → Add your domain
- **Railway**: Settings → Networking → Add Custom Domain

## Need Help?

- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app
- Check deployment logs in your hosting dashboard

