import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const experiences = [
    {
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

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="experience-header" variants={itemVariants}>
            <h2>Professional Experience</h2>
            <p className="section-subtitle">
              A journey of growth, learning, and impactful contributions
            </p>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="marker-line"></div>
                </div>

                <div className="timeline-content glass-effect">
                  <div className="exp-header">
                    <div className="exp-title-section">
                      <h3 className="exp-title">{exp.title}</h3>
                      <div className="exp-company">
                        <span className="company-name gradient-text">{exp.company}</span>
                        <span className="exp-type">{exp.type}</span>
                      </div>
                    </div>
                    
                    <div className="exp-meta">
                      <div className="exp-period">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="exp-location">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="exp-description">{exp.description}</p>

                  <div className="exp-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                        >
                          <ChevronRight size={14} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.02) }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="experience-summary" variants={itemVariants}>
            <div className="summary-content glass-effect">
              <h3>Career Highlights</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">10+</span>
                  <span className="highlight-label">Years in Industry</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">4</span>
                  <span className="highlight-label">Companies</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">50+</span>
                  <span className="highlight-label">Projects Delivered</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">8</span>
                  <span className="highlight-label">Team Members Led</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
