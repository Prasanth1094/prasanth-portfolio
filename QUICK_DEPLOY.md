# 🎯 Render Deployment Quick Start

## Step-by-Step Deployment

### 1. Prepare Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. Render Service Configuration

**Service Type:** Web Service
**Repository:** Your GitHub portfolio repo
**Branch:** main

**Build Settings:**
```
Build Command: npm run deploy:build
Start Command: npm run deploy:start
```

**Environment Variables:**
```
NODE_ENV=production
```

### 3. Deploy
Click "Create Web Service" and wait 5-10 minutes.

## 🌐 Your Live App Will Be At:
`https://your-service-name.onrender.com`

## 🧪 Test These URLs After Deployment:
- `/` - Portfolio homepage
- `/api/health` - API health check
- `/api/contact/static` - Static contact info

## 📞 Support
If you encounter issues, check:
1. Render build logs
2. Runtime logs
3. Environment variables
4. GitHub repository access

---
**Happy Deploying! 🚀**
