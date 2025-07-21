# 🚀 Render Deployment Guide for Portfolio Monorepo

## 📋 Pre-Deployment Checklist

### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Make build.sh executable (if on Linux/Mac)
```bash
chmod +x build.sh
```

## 🌐 Render Deployment Steps

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub account
3. Authorize Render to access your repositories

### Step 2: Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your portfolio repository

### Step 3: Configure Service Settings

**Basic Settings:**
- **Name**: `prasanth-portfolio` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`

**Build & Deploy Settings:**
- **Root Directory**: Leave blank
- **Build Command**: `npm run deploy:build`
- **Start Command**: `npm run deploy:start`

### Step 4: Environment Variables
Add these in Render dashboard → Environment:

**Required:**
```
NODE_ENV=production
```

**Optional (for enhanced features):**
```
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=your-email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Step 5: Deploy
1. Click "Create Web Service"
2. Render will automatically deploy your app
3. Wait for build to complete (5-10 minutes)

## 📱 Post-Deployment

### Your Live URLs:
- **Portfolio**: `https://your-app-name.onrender.com`
- **API Health**: `https://your-app-name.onrender.com/api/health`
- **Contact API**: `https://your-app-name.onrender.com/api/contact/static`

### Test Your Deployment:
1. Visit your portfolio URL
2. Navigate through all sections
3. Test contact form submission
4. Check API endpoints

## 🔧 Troubleshooting

### Common Issues:

**Build Failures:**
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

**Runtime Errors:**
- Check runtime logs
- Verify environment variables
- Test API endpoints individually

**Slow Loading:**
- Render free tier may have cold starts
- Consider upgrading for better performance

### Debug Commands:
```bash
# Test locally in production mode
npm run deploy:build
npm run deploy:start

# Check if port is configured correctly
echo $PORT
```

## 🚀 Render-Specific Optimizations

### Auto-Deploy on Git Push
- Render automatically deploys on every push to main branch
- Use branch protection for production safety

### Custom Domain (Paid Plans)
1. Go to Settings → Custom Domains
2. Add your domain
3. Configure DNS records

### SSL Certificate
- Automatically provided by Render
- No additional configuration needed

## 📊 Monitoring

### Render Dashboard:
- View deployment logs
- Monitor service health
- Track performance metrics

### Application Health:
- Monitor API endpoint: `/api/health`
- Set up external monitoring (UptimeRobot, etc.)

## 💡 Production Tips

1. **Environment Variables**: Never commit .env files
2. **Database**: Use MongoDB Atlas for production database
3. **Email**: Use professional email service (SendGrid, etc.)
4. **Monitoring**: Set up error tracking (Sentry, etc.)
5. **Performance**: Enable compression and caching
6. **Security**: Use helmet.js and proper CORS settings

## 🔄 Updates & Maintenance

### Updating Your App:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Render auto-deploys!
```

### Rolling Back:
- Use Render dashboard to redeploy previous versions
- Or revert git commits and push

---

**Need Help?**
- Check Render documentation: [docs.render.com](https://docs.render.com)
- Contact Render support
- Review deployment logs in dashboard
