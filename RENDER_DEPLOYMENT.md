# Render Deployment Configuration

## Service Settings
- **Service Type**: Web Service
- **Environment**: Node.js
- **Build Command**: `./build.sh`
- **Start Command**: `npm run start:production`
- **Root Directory**: Leave blank (uses repository root)

## Environment Variables
Set these in your Render dashboard:

### Required Variables
```
NODE_ENV=production
PORT=10000
```

### Optional Variables (for MongoDB and email)
```
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=your-email@example.com
CLIENT_URL=https://your-render-app.onrender.com
```

### Email Configuration (if using email service)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Deployment Steps
1. Push code to GitHub repository
2. Connect GitHub repo to Render
3. Configure build and start commands
4. Set environment variables
5. Deploy!

## Important Notes
- Render provides the PORT environment variable automatically
- The app serves both React frontend and API from the same port
- Static files are served from client/dist/ directory
- API routes are available at /api/*
