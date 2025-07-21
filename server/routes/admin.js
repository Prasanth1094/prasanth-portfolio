const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Project = require('../models/Project');

// GET /api/admin/dashboard - Get dashboard stats
router.get('/dashboard', async (req, res) => {
  try {
    const [
      totalContacts,
      unreadContacts,
      totalProjects,
      featuredProjects
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'unread' }),
      Project.countDocuments({ isActive: true }),
      Project.countDocuments({ featured: true, isActive: true })
    ]);

    // Get recent contacts
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email subject createdAt status');

    res.json({
      success: true,
      data: {
        stats: {
          totalContacts,
          unreadContacts,
          totalProjects,
          featuredProjects
        },
        recentContacts
      }
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data'
    });
  }
});

module.exports = router;
