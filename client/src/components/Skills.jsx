import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      gradient: 'var(--primary-gradient)',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
      ],
    },
    {
      title: 'Backend & Tools',
      gradient: 'var(--secondary-gradient)',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD Pipelines', level: 80 },
      ],
    },
    {
      title: 'Architecture & Design',
      gradient: 'var(--dark-gradient)',
      skills: [
        { name: 'Micro Frontends', level: 85 },
        { name: 'Component Libraries', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Accessibility (a11y)', level: 80 },
        { name: 'Design Systems', level: 85 },
        { name: 'Progressive Web Apps', level: 80 },
      ],
    },
  ];

  const tools = [
    'VS Code', 'WebStorm', 'Figma', 'Adobe XD', 'Webpack', 'Vite',
    'npm/yarn', 'Postman', 'Chrome DevTools', 'JIRA', 'Confluence',
    'Jenkins', 'GitHub Actions', 'AWS', 'Vercel', 'Netlify'
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2>Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-main">
            <div className="skills-categories">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="skill-category glass-effect"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="category-header">
                    <h3 style={
                      category.title === 'Architecture & Design' 
                        ? { color: '#00f2fe', textShadow: '0 0 10px rgba(0, 242, 254, 0.3)' }
                        : { background: category.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                    }>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            style={{ 
                              background: category.title === 'Architecture & Design' 
                                ? 'linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)' 
                                : category.gradient 
                            }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: 'easeOut'
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="tools-section" variants={itemVariants}>
              <h3>Tools & Technologies</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="tool-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      background: 'var(--primary-gradient)',
                      color: 'white',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number gradient-text">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">100+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">50+</span>
                <span className="stat-label">Components Built</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
