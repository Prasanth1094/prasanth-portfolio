const mongoose = require('mongoose');
require('dotenv').config();

// Quick script to insert data without models
async function insertQuickData() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI);
    console.log('📦 Connected to MongoDB');

    const db = mongoose.connection.db;

    // Insert sample projects directly
    const projectsCollection = db.collection('projects');
    
    const sampleProjects = [
      {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React and Node.js",
        category: "react",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        featured: true,
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "E-Commerce API",
        description: "RESTful API for e-commerce platform",
        category: "nodejs",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        featured: false,
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Task Manager",
        description: "Team collaboration and task management tool",
        category: "fullstack",
        technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
        featured: true,
        status: "in-progress",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const projectResult = await projectsCollection.insertMany(sampleProjects);
    console.log(`✅ Inserted ${projectResult.insertedCount} projects`);

    // Insert sample contacts
    const contactsCollection = db.collection('contacts');
    
    const sampleContacts = [
      {
        name: "John Smith",
        email: "john@example.com",
        subject: "Project Inquiry",
        message: "Interested in discussing a web development project",
        status: "new",
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sarah Davis",
        email: "sarah@company.com",
        subject: "Collaboration Opportunity",
        message: "Would like to collaborate on a React project",
        status: "replied",
        isRead: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const contactResult = await contactsCollection.insertMany(sampleContacts);
    console.log(`✅ Inserted ${contactResult.insertedCount} contacts`);

    console.log('🎉 Quick data insertion completed!');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

insertQuickData();
