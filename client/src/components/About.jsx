import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Expertise',
      description: 'Proficient in frontend frameworks, backend technologies, and modern development practices.',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      description: 'Experienced in leading development teams and mentoring junior developers.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Expert in optimizing applications for speed, scalability, and user experience.',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Assurance',
      description: 'Strong advocate for testing, code quality, and continuous integration practices.',
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2>About Me</h2>
            <p className="section-subtitle">
              Passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="about-main">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                I'm a seasoned UI Developer with over 10 years of experience in creating 
                robust, scalable, and user-friendly web applications. My journey in software 
                development has been driven by a passion for innovation and a commitment to 
                excellence.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of working with diverse teams 
                and technologies, from startups to enterprise-level organizations. I specialize 
                in modern frontend frameworks like React and Angular, and I'm well-versed in 
                micro-frontend architectures that enable scalable and maintainable applications.
              </p>

              <p>
                Beyond coding, I'm passionate about mentoring fellow developers, contributing 
                to open-source projects, and staying up-to-date with the latest industry trends. 
                I believe in writing clean, maintainable code and following best practices that 
                ensure long-term project success.
              </p>

              <div className="about-journey">
                <h3>My Journey</h3>
                <div className="journey-timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2014</div>
                    <div className="timeline-content">
                      <h4>Started as Junior Developer</h4>
                      <p>Began my career focusing on HTML, CSS, and JavaScript fundamentals</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2017</div>
                    <div className="timeline-content">
                      <h4>Frontend Specialist</h4>
                      <p>Mastered React and Angular, leading frontend development projects</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2020</div>
                    <div className="timeline-content">
                      <h4>Senior Developer</h4>
                      <p>Expanded into micro-frontends, team leadership, and architecture design</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">
                      <h4>Full-Stack Expert</h4>
                      <p>Now leading development teams and architecting scalable solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-highlights" variants={itemVariants}>
              <h3>What I Bring</h3>
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="highlight-card glass-effect"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="highlight-icon">
                      {highlight.icon}
                    </div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="about-cta" variants={itemVariants}>
            <p>
              Ready to collaborate on your next project? Let's build something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
