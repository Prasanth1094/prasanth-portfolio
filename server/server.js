const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

// Import database connection
const dbConnection = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security middleware
app.use(helmet({
  contentSecurityPolicy: NODE_ENV === 'production' ? undefined : false
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// CORS configuration
const corsOptions = {
  origin: NODE_ENV === 'production' 
    ? [process.env.CLIENT_URL || 'https://prasanth-portfolio-fkmi.onrender.com'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize database connection
dbConnection.connect();

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/experience', require('./routes/experience'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/admin', require('./routes/admin'));

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = await dbConnection.healthCheck();
    const connectionStatus = dbConnection.getConnectionStatus();
    
    res.status(200).json({
      status: 'OK',
      message: 'Portfolio API is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: NODE_ENV,
      database: {
        ...dbStatus,
        connection: connectionStatus
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Health check failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Serve static files from React build in production
if (NODE_ENV === 'production') {
  // Serve static files from the React app build folder
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  // Catch all handler: send back React's index.html file for any non-API routes
  app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
} else {
  // Development mode - provide info about running React dev server
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.json({
      message: 'Portfolio API Server',
      mode: 'development',
      react_dev_server: 'http://localhost:5173',
      api_endpoints: {
        health: '/api/health',
        contact: '/api/contact',
        projects: '/api/projects',
        experience: '/api/experience',
        skills: '/api/skills',
        admin: '/api/admin'
      }
    });
  });
}

// 404 handler for API routes only
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'API endpoint not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${NODE_ENV}`);
  if (NODE_ENV === 'development') {
    console.log(`🔗 API: http://localhost:${PORT}/api`);
    console.log(`⚛️  React Dev: http://localhost:5173`);
  } else {
    console.log(`🌐 Full App: http://localhost:${PORT}`);
  }
});
