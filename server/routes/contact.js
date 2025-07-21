const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Contact = require('../models/Contact');
const sendEmail = require('../utils/emailService');

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().trim().max(100).required(),
  email: Joi.string().email().max(100).required(),
  subject: Joi.string().trim().max(200).required(),
  message: Joi.string().trim().max(1000).required()
});

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    // Validate input
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details[0].message
      });
    }

    // Create contact record
    const contact = new Contact({
      ...value,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent') || 'Unknown'
    });

    await contact.save();

    // Send notification email (optional)
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission: ${value.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${value.name}</p>
          <p><strong>Email:</strong> ${value.email}</p>
          <p><strong>Subject:</strong> ${value.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${value.message.replace(/\n/g, '<br>')}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: {
        id: contact._id,
        timestamp: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;

    const query = status ? { status } : {};
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-ipAddress -userAgent');

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// GET /api/contact/static - Get static contact information
router.get('/static', (req, res) => {
  try {
    // Static contact information
    const staticContactInfo = {
      success: true,
      data: {
        personal: {
          name: "Prasanth",
          title: "Senior UI Developer",
          email: "prasanth.dev@email.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA, USA",
          timezone: "PST (UTC-8)",
          languages: ["English", "Tamil", "Hindi"]
        },
        professional: {
          experience: "10+ years",
          specialization: "Frontend Development & UI/UX",
          availability: "Available for new opportunities",
          response_time: "24-48 hours",
          preferred_contact: "email",
          hourly_rate: "$75-100/hour",
          project_rate: "Based on scope"
        },
        social: {
          github: "https://github.com/prasanth",
          linkedin: "https://linkedin.com/in/prasanth",
          twitter: "https://twitter.com/prasanth",
          portfolio: "https://prasanth-portfolio.com",
          instagram: "https://instagram.com/prasanth.dev"
        },
        services: [
          "React Development",
          "Frontend Architecture",
          "UI/UX Design",
          "Performance Optimization",
          "Code Review & Mentoring",
          "Technical Consulting",
          "Component Libraries",
          "Design Systems"
        ],
        technologies: [
          "React.js", "TypeScript", "Next.js", "Vue.js",
          "Node.js", "Express.js", "MongoDB", "PostgreSQL",
          "HTML5", "CSS3", "JavaScript", "SASS/SCSS",
          "Webpack", "Vite", "Docker", "AWS"
        ],
        working_hours: {
          timezone: "PST (UTC-8)",
          monday_friday: "9:00 AM - 6:00 PM",
          weekend: "Limited availability",
          emergency: "Available for urgent projects",
          vacation: "2-week notice required"
        },
        statistics: {
          projects_completed: 150,
          client_satisfaction: "100%",
          years_experience: 10,
          technologies_mastered: 25,
          coffee_cups_daily: 4
        }
      },
      message: "Static contact information retrieved successfully",
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    };

    res.json(staticContactInfo);

  } catch (error) {
    console.error('Get static contact info error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch static contact information'
    });
  }
});

module.exports = router;
