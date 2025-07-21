import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { AnimatedCard, AnimatedButton, AnimatedIcon, AnimatedContainer } from '../shared/components';
import './Projects.css';
import '../shared/components/SharedComponents.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Micro Frontend Platform',
      category: 'react',
      description: 'A scalable e-commerce platform built with micro-frontend architecture, featuring independent deployment of shopping cart, product catalog, and user management modules.',
      longDescription: 'This project revolutionized how we approach large-scale e-commerce applications. By implementing a micro-frontend architecture, we enabled multiple teams to work independently while maintaining a cohesive user experience. The platform handles over 100,000 daily users and processes millions in transactions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'TypeScript', 'Webpack Module Federation', 'Node.js', 'MongoDB', 'Docker'],
      features: [
        'Independent module deployment',
        'Shared component library',
        'Real-time inventory updates',
        'Advanced search and filtering',
        'Payment gateway integration',
        'Progressive Web App features'
      ],
      github: 'https://github.com/username/ecommerce-microfrontend',
      live: 'https://ecommerce-demo.vercel.app',
      featured: true,
      stats: {
        users: '100K+',
        performance: '98%',
        uptime: '99.9%'
      }
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      category: 'angular',
      description: 'An enterprise-grade analytics dashboard with real-time data visualization, built for monitoring KPIs and business metrics across multiple departments.',
      longDescription: 'Developed for a Fortune 500 company to replace their legacy reporting system. The dashboard processes over 1 million data points daily and provides insights that helped reduce operational costs by 25%. Features advanced filtering, customizable widgets, and automated report generation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Angular', 'D3.js', 'WebSocket', 'Python', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time data streaming',
        'Interactive charts and graphs',
        'Customizable dashboard layouts',
        'Automated alerting system',
        'Export capabilities',
        'Role-based access control'
      ],
      github: 'https://github.com/username/analytics-dashboard',
      live: 'https://analytics-dashboard-demo.netlify.app',
      featured: true,
      stats: {
        dataPoints: '1M+',
        charts: '50+',
        users: '500+'
      }
    },
    {
      id: 3,
      title: 'Component Library & Design System',
      category: 'react',
      description: 'A comprehensive React component library with design system documentation, used across 15+ projects in the organization.',
      longDescription: 'Created to standardize UI components across the organization and reduce development time. The library includes 100+ components, comprehensive documentation, and automated testing. It reduced development time by 40% and improved consistency across all products.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      technologies: ['React', 'Storybook', 'TypeScript', 'SASS', 'Jest', 'Rollup'],
      features: [
        'Comprehensive component catalog',
        'Interactive documentation',
        'Accessibility compliance',
        'Theme customization',
        'Automated testing',
        'NPM package distribution'
      ],
      github: 'https://github.com/username/component-library',
      live: 'https://component-library-storybook.netlify.app',
      featured: false,
      stats: {
        components: '100+',
        downloads: '10K+',
        projects: '15+'
      }
    },
    {
      id: 4,
      title: 'Project Management SaaS',
      category: 'fullstack',
      description: 'A full-stack project management application with team collaboration features, task tracking, and integration with popular tools.',
      longDescription: 'Built as a competitive alternative to existing project management tools. Features include drag-and-drop kanban boards, time tracking, team chat, file sharing, and integrations with GitHub, Slack, and Google Workspace. Currently serving 1000+ active users.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS'],
      features: [
        'Kanban board interface',
        'Real-time collaboration',
        'Time tracking',
        'File sharing',
        'Third-party integrations',
        'Mobile responsive design'
      ],
      github: 'https://github.com/username/project-management',
      live: 'https://projectmanager-app.vercel.app',
      featured: true,
      stats: {
        users: '1K+',
        projects: '5K+',
        uptime: '99.8%'
      }
    },
    {
      id: 5,
      title: 'AI-Powered Code Review Tool',
      category: 'python',
      description: 'An intelligent code review tool that uses machine learning to identify potential bugs, security vulnerabilities, and code quality issues.',
      longDescription: 'Developed to enhance the code review process by automatically detecting common issues and suggesting improvements. The tool integrates with GitHub and GitLab, providing instant feedback on pull requests. It has helped teams reduce bugs in production by 35%.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Code quality metrics',
        'GitHub/GitLab integration',
        'Custom rule configuration',
        'Team analytics dashboard'
      ],
      github: 'https://github.com/username/ai-code-review',
      live: 'https://ai-code-review-demo.herokuapp.com',
      featured: false,
      stats: {
        repos: '500+',
        issues: '10K+',
        accuracy: '92%'
      }
    },
    {
      id: 6,
      title: 'Progressive Web App Framework',
      category: 'javascript',
      description: 'A lightweight framework for building Progressive Web Apps with offline capabilities, push notifications, and app-like experience.',
      longDescription: 'Created to simplify PWA development and provide a standardized approach to building offline-first applications. The framework includes service worker management, caching strategies, and background sync capabilities. Used by 50+ developers worldwide.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      technologies: ['JavaScript', 'Service Workers', 'IndexedDB', 'Web App Manifest', 'Workbox'],
      features: [
        'Offline-first architecture',
        'Background synchronization',
        'Push notifications',
        'App shell model',
        'Automatic updates',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/username/pwa-framework',
      live: 'https://pwa-framework-demo.netlify.app',
      featured: false,
      stats: {
        downloads: '5K+',
        stars: '200+',
        contributors: '15+'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React' },
    { key: 'angular', label: 'Angular' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'python', label: 'Python' },
    { key: 'javascript', label: 'JavaScript' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2>Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing some of my best work and contributions
            </p>
          </motion.div>

          {/* Featured Projects Section */}
          <motion.div className="featured-section" variants={itemVariants}>
            <h3>🌟 Featured Work</h3>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="featured-card glass-effect"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="overlay-buttons">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                           onClick={(e) => e.stopPropagation()}>
                          <Github size={20} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           onClick={(e) => e.stopPropagation()}>
                          <ExternalLink size={20} />
                        </a>
                        <button onClick={() => setSelectedProject(project)}>
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    
                    <div className="project-stats">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="stat">
                          <span className="stat-value">{value}</span>
                          <span className="stat-label">{key}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div className="filter-tabs" variants={itemVariants}>
            {filters.map((filterItem, index) => (
              <AnimatedButton
                key={filterItem.key}
                variant={filter === filterItem.key ? 'primary' : 'ghost'}
                className="filter-tab"
                onClick={() => setFilter(filterItem.key)}
                index={index}
              >
                {filterItem.label}
              </AnimatedButton>
            ))}
          </motion.div>

          {/* All Projects Grid */}
          <AnimatedContainer className="projects-grid" variants={containerVariants}>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <AnimatedCard
                  key={project.id}
                  className="project-card"
                  hasGlassEffect={true}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <AnimatedButton
                        variant="primary"
                        onClick={() => setSelectedProject(project)}
                      >
                        <AnimatedIcon Icon={Eye} size={20} />
                        View Details
                      </AnimatedButton>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}>
                        <AnimatedIcon Icon={Github} size={16} />
                        Code
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}>
                        <AnimatedIcon Icon={ExternalLink} size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </AnimatedContainer>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <img src={selectedProject.image} alt={selectedProject.title} />
                
                <div className="modal-info">
                  <p>{selectedProject.longDescription}</p>
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
