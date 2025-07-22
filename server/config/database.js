const mongoose = require('mongoose');

/**
 * Database connection configuration
 */
class DatabaseConnection {
  constructor() {
    this.isConnected = false;
  }

  /**
   * Connect to MongoDB Atlas
   */
  async connect() {
    try {
      // Prevent multiple connections
      if (this.isConnected) {
        console.log('📦 Already connected to MongoDB');
        return;
      }

      // MongoDB connection string
      const MONGODB_URI = process.env.MONGODB_URI || 
        'mongodb+srv://cluster0.dcgwm1p.mongodb.net/portfolio?retryWrites=true&w=majority';

      // Connection options
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        // Removed bufferMaxEntries and bufferCommands as they're deprecated
      };

      // Connect to MongoDB
      await mongoose.connect(MONGODB_URI, options);

      this.isConnected = true;

      console.log('📦 Connected to MongoDB Atlas successfully');
      console.log(`🗄️  Database: ${mongoose.connection.name}`);
      console.log(`🌐 Host: ${mongoose.connection.host}`);
      console.log(`📡 Port: ${mongoose.connection.port}`);

      // Connection event listeners
      this.setupEventListeners();

    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      console.error('💡 Make sure your MongoDB URI is correct and includes credentials');
      console.error('🔗 Check your network connection and MongoDB Atlas settings');
      
      // Exit process on connection failure in production
      if (process.env.NODE_ENV === 'production') {
        process.exit(1);
      }
    }
  }

  /**
   * Setup database event listeners
   */
  setupEventListeners() {
    // Connection events
    mongoose.connection.on('connected', () => {
      console.log('🔗 Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('🔌 Mongoose disconnected from MongoDB');
      this.isConnected = false;
    });

    // Handle application termination
    process.on('SIGINT', this.gracefulShutdown);
    process.on('SIGTERM', this.gracefulShutdown);
  }

  /**
   * Graceful shutdown
   */
  gracefulShutdown = async (signal) => {
    console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`);
    
    try {
      await mongoose.connection.close();
      console.log('📦 MongoDB connection closed.');
      process.exit(0);
    } catch (error) {
      console.error('❌ Error during database shutdown:', error);
      process.exit(1);
    }
  }

  /**
   * Get connection status
   */
  getConnectionStatus() {
    return {
      isConnected: this.isConnected,
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host,
      name: mongoose.connection.name
    };
  }

  /**
   * Health check for database
   */
  async healthCheck() {
    try {
      const result = await mongoose.connection.db.admin().ping();
      return {
        status: 'healthy',
        message: 'Database is responsive',
        details: result
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        message: 'Database is not responsive',
        error: error.message
      };
    }
  }
}

// Create and export a singleton instance
const dbConnection = new DatabaseConnection();

module.exports = dbConnection;
