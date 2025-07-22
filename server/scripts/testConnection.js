const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    console.log('🔗 Testing MongoDB connection...');
    
    const MONGODB_URI = process.env.MONGODB_URI;
    console.log('📍 URI (masked):', MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@'));
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas successfully');
    
    // Test database operations
    const db = mongoose.connection.db;
    
    // Test listing collections
    const collections = await db.listCollections().toArray();
    console.log('📁 Available collections:', collections.map(c => c.name));
    
    // Test find operation on contacts
    try {
      const contactsCount = await db.collection('contacts').countDocuments();
      console.log('📧 Contacts count:', contactsCount);
      
      const contacts = await db.collection('contacts').find({}).limit(1).toArray();
      console.log('📧 Sample contact:', contacts.length > 0 ? 'Found' : 'None');
    } catch (error) {
      console.error('❌ Contacts access error:', error.message);
    }
    
    // Test find operation on projects
    try {
      const projectsCount = await db.collection('projects').countDocuments();
      console.log('🚀 Projects count:', projectsCount);
      
      const projects = await db.collection('projects').find({}).limit(1).toArray();
      console.log('🚀 Sample project:', projects.length > 0 ? 'Found' : 'None');
    } catch (error) {
      console.error('❌ Projects access error:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    if (error.message.includes('authentication failed')) {
      console.log('💡 This is an authentication error. Check:');
      console.log('   - Username and password are correct');
      console.log('   - User has proper permissions in MongoDB Atlas');
      console.log('   - User is created for the correct database');
    }
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

testConnection();
