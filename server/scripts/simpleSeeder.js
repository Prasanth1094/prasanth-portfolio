const mongoose = require('mongoose');
require('dotenv').config();

// Import database connection
const dbConnection = require('../config/database');

/**
 * Simple seed script with minimal data that matches the models exactly
 */
async function seedDatabaseSimple() {
  try {
    console.log('🌱 Starting simple database seeding...');

    // Connect to database
    await dbConnection.connect();

    const db = mongoose.connection.db;

    // Clear existing data
    console.log('🧹 Clearing existing data...');
    await db.collection('contacts').deleteMany({});
    await db.collection('projects').deleteMany({});

    // Insert contacts
    console.log('📧 Inserting sample contacts...');
    const contacts = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Web Development Project",
        message: "Hi Prasanth, I'm interested in discussing a React project for my startup.",
        status: "unread",
        ipAddress: "192.168.1.100",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sarah Johnson",
        email: "sarah.j@techcorp.com",
        subject: "Frontend Consultation",
        message: "We need help optimizing our Angular application.",
        status: "replied",
        ipAddress: "10.0.0.15",
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mike Chen",
        email: "mike.chen@startup.io",
        subject: "Full Stack Development",
        message: "Looking for a full-stack developer to build an e-commerce platform using MERN stack.",
        status: "unread",
        ipAddress: "172.16.0.5",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const contactResult = await db.collection('contacts').insertMany(contacts);
    console.log(`✅ Inserted ${contactResult.insertedCount} contacts`);

    // Insert projects
    console.log('🚀 Inserting sample projects...');
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with modern UI, shopping cart, and payment integration.",
        longDescription: "Developed a comprehensive e-commerce solution using React.js and Node.js with features including user authentication, product catalog, shopping cart, Stripe payment integration, and admin dashboard.",
        category: "fullstack",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        features: [
          "User authentication and authorization",
          "Product catalog with search and filtering",
          "Shopping cart and wishlist functionality",
          "Secure payment processing with Stripe",
          "Admin dashboard for product management"
        ],
        image: "/images/projects/ecommerce-platform.jpg",
        github: "https://github.com/prasanth/ecommerce-platform",
        live: "https://ecommerce-demo.prasanth.dev",
        featured: true,
        stats: {
          users: "5000+",
          performance: "95%",
          uptime: "99.9%"
        },
        order: 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration.",
        longDescription: "Built a comprehensive task management solution using React with Redux for state management and Socket.io for real-time collaboration.",
        category: "react",
        technologies: ["React", "Redux", "Socket.io", "Node.js", "PostgreSQL"],
        features: [
          "Real-time task updates and notifications",
          "Team collaboration with chat functionality",
          "Project and milestone tracking",
          "Drag-and-drop task management",
          "Analytics dashboard with charts"
        ],
        image: "/images/projects/task-management.jpg",
        github: "https://github.com/prasanth/task-manager",
        live: "https://taskmanager.prasanth.dev",
        featured: true,
        stats: {
          users: "2500+",
          performance: "92%",
          projects: "1000+"
        },
        order: 2,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Learning Management System",
        description: "An educational platform with course management, video streaming, and progress tracking.",
        longDescription: "Developed a comprehensive LMS using Angular and .NET Core with course creation, video content delivery, and student progress tracking.",
        category: "angular",
        technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Video.js"],
        features: [
          "Course creation and management",
          "Video streaming with adaptive quality",
          "Interactive quizzes and assessments",
          "Student progress tracking",
          "Certificate generation"
        ],
        image: "/images/projects/lms-platform.jpg",
        github: "https://github.com/prasanth/lms-platform",
        live: "https://learn.prasanth.dev",
        featured: false,
        stats: {
          users: "10000+",
          performance: "88%",
          accuracy: "78%"
        },
        order: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard for data visualization with real-time charts and filters.",
        longDescription: "Created a powerful data visualization platform using React and D3.js for interactive charts with real-time updates and advanced filtering.",
        category: "react",
        technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
        features: [
          "Interactive charts and graphs",
          "Real-time data updates",
          "Advanced filtering and search",
          "Data export in multiple formats",
          "Custom dashboard creation"
        ],
        image: "/images/projects/data-dashboard.jpg",
        github: "https://github.com/prasanth/data-dashboard",
        live: "https://analytics.prasanth.dev",
        featured: true,
        stats: {
          users: "1200+",
          performance: "94%",
          dataPoints: "1M+",
          charts: "500+"
        },
        order: 4,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Social Media API",
        description: "A RESTful API for social media features including posts, comments, and user management.",
        longDescription: "Built a scalable social media API using Node.js and MongoDB with user authentication, post creation, commenting system, and real-time notifications.",
        category: "nodejs",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
        features: [
          "User authentication and profiles",
          "Post creation with media uploads",
          "Commenting and reply system",
          "Like and reaction functionality",
          "Real-time notifications"
        ],
        image: "/images/projects/social-api.jpg",
        github: "https://github.com/prasanth/social-media-api",
        live: "https://api.social.prasanth.dev",
        featured: false,
        stats: {
          users: "15000+",
          performance: "96%",
          uptime: "99.8%"
        },
        order: 5,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const projectResult = await db.collection('projects').insertMany(projects);
    console.log(`✅ Inserted ${projectResult.insertedCount} projects`);

    console.log('🎉 Database seeding completed successfully!');
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`- Contacts: ${contactResult.insertedCount}`);
    console.log(`- Projects: ${projectResult.insertedCount}`);
    console.log(`- Featured Projects: ${projects.filter(p => p.featured).length}`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

seedDatabaseSimple();
