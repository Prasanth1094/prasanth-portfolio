const express = require('express');
const router = express.Router();

// Static experience data - can be moved to database later
const experienceData = [
  {
    id: 1,
    title: 'Senior Frontend Developer & Team Lead',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading a team of 8 frontend developers in building scalable micro-frontend applications. Architected and implemented a component library used across 15+ projects, resulting in 40% faster development cycles.',
    achievements: [
      'Led migration from monolith to micro-frontend architecture',
      'Implemented automated testing strategy increasing code coverage to 95%',
      'Mentored 5 junior developers, with 3 receiving promotions',
      'Reduced application load time by 60% through performance optimization',
      'Established code review standards and best practices'
    ],
    technologies: ['React', 'TypeScript', 'Micro Frontends', 'Jest', 'Webpack', 'Azure DevOps']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations Inc',
    location: 'Austin, TX',
    period: '2019 - 2022',
    type: 'Full-time',
    description: 'Developed and maintained multiple client-facing applications using React and Angular. Collaborated with UX/UI designers to implement pixel-perfect, responsive designs that improved user engagement by 35%.',
    achievements: [
      'Built 12+ responsive web applications from scratch',
      'Integrated REST APIs and GraphQL endpoints',
      'Implemented real-time features using WebSocket connections',
      'Optimized applications for mobile devices increasing mobile traffic by 50%',
      'Contributed to open-source projects used by 1000+ developers'
    ],
    technologies: ['React', 'Angular', 'JavaScript', 'SASS', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'StartupHub',
    location: 'Remote',
    period: '2017 - 2019',
    type: 'Full-time',
    description: 'Worked in a fast-paced startup environment building the company\'s main product dashboard. Collaborated directly with product managers and designers to deliver features that increased user retention by 45%.',
    achievements: [
      'Developed interactive data visualization components',
      'Implemented progressive web app features',
      'Built responsive email templates with 98% client compatibility',
      'Created automated deployment pipelines reducing release time by 70%',
      'Participated in code reviews and pair programming sessions'
    ],
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Python', 'Docker', 'Git']
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    company: 'WebCraft Agency',
    location: 'New York, NY',
    period: '2014 - 2017',
    type: 'Full-time',
    description: 'Started my career building custom websites and web applications for various clients. Gained solid foundation in web technologies and best practices while working on diverse projects.',
    achievements: [
      'Delivered 25+ client websites on time and within budget',
      'Mastered responsive design principles and cross-browser compatibility',
      'Learned version control and collaborative development workflows',
      'Received "Developer of the Year" award in 2016',
      'Completed advanced JavaScript and React certification courses'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'MySQL']
  }
];

// GET /api/experience - Get all experience data
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: experienceData,
      count: experienceData.length
    });
  } catch (error) {
    console.error('Get experience error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch experience data'
    });
  }
});

// GET /api/experience/:id - Get single experience
router.get('/:id', async (req, res) => {
  try {
    const experience = experienceData.find(exp => exp.id === parseInt(req.params.id));
    
    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      data: experience
    });
  } catch (error) {
    console.error('Get experience error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch experience data'
    });
  }
});

module.exports = router;
