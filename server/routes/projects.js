const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const featured = req.query.featured;
    
    let query = { isActive: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.featured = true;
    }

    const projects = await Project.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 });

    res.json({
      success: true,
      data: projects,
      count: projects.length
    });

  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects'
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ 
      _id: req.params.id, 
      isActive: true 
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });

  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project'
    });
  }
});

module.exports = router;
