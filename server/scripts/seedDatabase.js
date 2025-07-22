const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Contact = require('../models/Contact');
const Project = require('../models/Project');

// Import database connection
const dbConnection = require('../config/database');

/**
 * Sample data for seeding the database
 */
const sampleData = {
  contacts: [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "Web Development Project",
      message: "Hi Prasanth, I'm interested in discussing a React project for my startup. Could we schedule a call to discuss the requirements?",
      status: "unread",
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
      subject: "Frontend Consultation",
      message: "We need help optimizing our Angular application. Your experience with micro frontends caught our attention.",
      status: "replied",
      ipAddress: "10.0.0.15",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    },
    {
      name: "Mike Chen",
      email: "mike.chen@startup.io",
      subject: "Full Stack Development",
      message: "Looking for a full-stack developer to build an e-commerce platform using MERN stack. Are you available for a 3-month project?",
      status: "unread",
      ipAddress: "172.16.0.5",
      userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    },
    {
      name: "Emily Rodriguez",
      email: "emily.r@designstudio.com",
      subject: "UI/UX Collaboration",
      message: "We have designs ready and need a skilled frontend developer to implement them. The project involves React and modern CSS.",
      status: "read",
      ipAddress: "203.0.113.10",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0"
    }
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with modern UI, shopping cart, payment integration, and admin dashboard.",
      longDescription: "Developed a comprehensive e-commerce solution using React.js and Node.js. Features include user authentication, product catalog, shopping cart, Stripe payment integration, order management, and an admin dashboard for inventory management. Implemented responsive design with mobile-first approach and optimized for performance.",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Material-UI"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for product management",
        "Responsive design for all devices",
        "Email notifications for orders"
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
      isActive: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
      longDescription: "Built a comprehensive task management solution using React with Redux for state management and Socket.io for real-time collaboration. The application includes project creation, task assignment, progress tracking, team chat, and detailed analytics dashboard.",
      category: "react",
      technologies: ["React", "Redux", "Socket.io", "Node.js", "PostgreSQL", "Chart.js"],
      features: [
        "Real-time task updates and notifications",
        "Team collaboration with chat functionality",
        "Project and milestone tracking",
        "Drag-and-drop task management",
        "Time tracking and reporting",
        "Analytics dashboard with charts",
        "File attachments and comments",
        "Mobile-responsive interface"
      ],
      image: "/images/projects/task-management.jpg",
      githubUrl: "https://github.com/prasanth/task-manager",
      liveUrl: "https://taskmanager.prasanth.dev",
      featured: true,
      status: "completed",
      startDate: new Date("2023-10-01"),
      endDate: new Date("2024-01-10"),
      clientName: "ProductivityPro Inc",
      metrics: {
        performanceScore: 92,
        usersImpacted: 2500,
        productivityIncrease: 35
      }
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, quizzes, and progress tracking.",
      longDescription: "Developed a comprehensive LMS using Angular and .NET Core. The platform supports course creation, video content delivery, interactive quizzes, student progress tracking, and instructor analytics. Implemented video streaming optimization and offline content access.",
      category: "angular",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Video.js", "SignalR"],
      features: [
        "Course creation and management",
        "Video streaming with adaptive quality",
        "Interactive quizzes and assessments",
        "Student progress tracking",
        "Discussion forums and messaging",
        "Certificate generation",
        "Offline content access",
        "Instructor analytics dashboard"
      ],
      image: "/images/projects/lms-platform.jpg",
      githubUrl: "https://github.com/prasanth/lms-platform",
      liveUrl: "https://learn.prasanth.dev",
      featured: false,
      status: "completed",
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-09-30"),
      clientName: "EduTech Solutions",
      metrics: {
        performanceScore: 88,
        usersImpacted: 10000,
        courseCompletionRate: 78
      }
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data visualization with real-time charts, filters, and export capabilities.",
      longDescription: "Created a powerful data visualization platform using React and D3.js for interactive charts. The dashboard connects to multiple data sources, provides real-time updates, and offers advanced filtering and export capabilities. Optimized for handling large datasets efficiently.",
      category: "react",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Interactive charts and graphs",
        "Real-time data updates",
        "Advanced filtering and search",
        "Data export in multiple formats",
        "Custom dashboard creation",
        "Multi-source data integration",
        "Performance optimization for large datasets",
        "Responsive design with mobile support"
      ],
      image: "/images/projects/data-dashboard.jpg",
      githubUrl: "https://github.com/prasanth/data-dashboard",
      liveUrl: "https://analytics.prasanth.dev",
      featured: true,
      status: "completed",
      startDate: new Date("2023-03-01"),
      endDate: new Date("2023-05-31"),
      clientName: "DataInsights Corp",
      metrics: {
        performanceScore: 94,
        usersImpacted: 1200,
        dataProcessingSpeed: 300
      }
    },
    {
      title: "Social Media API",
      description: "A RESTful API for social media features including posts, comments, likes, and user management.",
      longDescription: "Built a scalable social media API using Node.js and MongoDB. Implements features like user authentication, post creation, commenting system, like/unlike functionality, friend connections, and real-time notifications. Includes comprehensive testing and API documentation.",
      category: "nodejs",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Jest", "Swagger"],
      features: [
        "User authentication and profiles",
        "Post creation with media uploads",
        "Commenting and reply system",
        "Like and reaction functionality",
        "Friend connections and following",
        "Real-time notifications",
        "Content moderation tools",
        "Comprehensive API documentation"
      ],
      image: "/images/projects/social-api.jpg",
      githubUrl: "https://github.com/prasanth/social-media-api",
      liveUrl: "https://api.social.prasanth.dev",
      featured: false,
      status: "completed",
      startDate: new Date("2022-11-01"),
      endDate: new Date("2023-02-28"),
      clientName: "ConnectApp Startup",
      metrics: {
        performanceScore: 96,
        usersImpacted: 15000,
        apiResponseTime: 150
      }
    },
    {
      title: "Inventory Management System",
      description: "A comprehensive inventory management system with barcode scanning, reporting, and multi-location support.",
      longDescription: "Developed an enterprise-level inventory management system using Python Django and React. Features include barcode scanning, multi-location inventory tracking, automated reordering, comprehensive reporting, and integration with popular accounting software.",
      category: "python",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Celery", "Redis", "Docker"],
      features: [
        "Barcode scanning and generation",
        "Multi-location inventory tracking",
        "Automated reorder notifications",
        "Comprehensive reporting and analytics",
        "Supplier management",
        "Integration with accounting software",
        "Mobile app for warehouse operations",
        "Real-time stock level monitoring"
      ],
      image: "/images/projects/inventory-system.jpg",
      githubUrl: "https://github.com/prasanth/inventory-system",
      liveUrl: "https://inventory.prasanth.dev",
      featured: false,
      status: "in-progress",
      startDate: new Date("2024-05-01"),
      endDate: null,
      clientName: "RetailFlow Solutions",
      metrics: {
        performanceScore: 91,
        usersImpacted: 500,
        efficiencyImprovement: 45
      }
    }
  ]
};

/**
 * Seed the database with sample data
 */
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Connect to database
    await dbConnection.connect();

    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log('🧹 Clearing existing data...');
    await Contact.deleteMany({});
    await Project.deleteMany({});

    // Insert contacts
    console.log('📧 Inserting sample contacts...');
    const contacts = await Contact.insertMany(sampleData.contacts);
    console.log(`✅ Inserted ${contacts.length} contacts`);

    // Insert projects
    console.log('🚀 Inserting sample projects...');
    const projects = await Project.insertMany(sampleData.projects);
    console.log(`✅ Inserted ${projects.length} projects`);

    console.log('🎉 Database seeding completed successfully!');
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`- Contacts: ${contacts.length}`);
    console.log(`- Projects: ${projects.length}`);
    console.log(`- Featured Projects: ${projects.filter(p => p.featured).length}`);
    console.log(`- Completed Projects: ${projects.filter(p => p.status === 'completed').length}`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

/**
 * Clear all data from database
 */
async function clearDatabase() {
  try {
    console.log('🧹 Starting database cleanup...');

    // Connect to database
    await dbConnection.connect();

    // Clear all collections
    await Contact.deleteMany({});
    await Project.deleteMany({});

    console.log('✅ Database cleared successfully!');

  } catch (error) {
    console.error('❌ Error clearing database:', error);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Check command line arguments
const command = process.argv[2];

if (command === 'seed') {
  seedDatabase();
} else if (command === 'clear') {
  clearDatabase();
} else {
  console.log('Usage:');
  console.log('  npm run seed       - Seed database with sample data');
  console.log('  npm run seed clear - Clear all data from database');
  process.exit(1);
}
