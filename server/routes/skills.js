const express = require('express');
const router = express.Router();

// Static data for now - can be moved to database later
const skillsData = {
  categories: [
    {
      title: 'Frontend Technologies',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 }
      ]
    },
    {
      title: 'Backend & Tools',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD Pipelines', level: 80 }
      ]
    },
    {
      title: 'Architecture & Design',
      gradient: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      skills: [
        { name: 'Micro Frontends', level: 85 },
        { name: 'Component Libraries', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Accessibility (a11y)', level: 80 },
        { name: 'Design Systems', level: 85 },
        { name: 'Progressive Web Apps', level: 80 }
      ]
    }
  ],
  tools: [
    'VS Code', 'WebStorm', 'Figma', 'Adobe XD', 'Webpack', 'Vite',
    'npm/yarn', 'Postman', 'Chrome DevTools', 'JIRA', 'Confluence',
    'Jenkins', 'GitHub Actions', 'AWS', 'Vercel', 'Netlify'
  ]
};

// GET /api/skills - Get all skills data
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skillsData
    });
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills data'
    });
  }
});

module.exports = router;
