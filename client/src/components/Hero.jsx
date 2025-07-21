import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { AnimatedButton, AnimatedIcon } from '../shared/components';
import './Hero.css';
import '../shared/components/SharedComponents.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.p
              className="hero-greeting"
              variants={itemVariants}
            >
              Hi there! 👋 I'm
            </motion.p>

            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              <span className="gradient-text">Prasanth</span>
            </motion.h1>

            <motion.h2
              className="hero-title"
              variants={itemVariants}
            >
              Senior UI Developer & Frontend Architect
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              With 10+ years of experience crafting exceptional user experiences using 
              modern technologies like React, Angular, and cutting-edge frontend frameworks. 
              I specialize in building scalable micro-frontends and leading development teams 
              to deliver high-quality solutions.
            </motion.p>

            <motion.div
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number gradient-text">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">15+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              variants={itemVariants}
            >
              <AnimatedButton
                href="#contact"
                variant="primary"
                className="btn-primary"
                icon={<AnimatedIcon Icon={Mail} size={20} />}
              >
                Let's Connect
              </AnimatedButton>
              
              <AnimatedButton
                href="/resume.pdf"
                variant="secondary"
                className="btn-secondary"
                download
                icon={<AnimatedIcon Icon={Download} size={20} />}
              >
                Download Resume
              </AnimatedButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={itemVariants}
          >
            <motion.div
              className="code-animation"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">portfolio.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">name:</span>
                    <span className="code-string"> 'Prasanth'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">experience:</span>
                    <span className="code-number"> '10+ years'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">skills:</span>
                    <span className="code-string"> ['React', 'Angular']</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">passion:</span>
                    <span className="code-string"> 'Building amazing UIs'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-string">{'}'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="scroll-link"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
