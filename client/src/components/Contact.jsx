import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { AnimatedInput, AnimatedTextarea, AnimatedButton, AnimatedIcon } from '../shared/components';
import { useContactForm } from '../hooks/useApi';
import './Contact.css';
import '../shared/components/SharedComponents.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { loading, error, submitContact, isSubmitted, resetForm } = useContactForm();
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        message: `Subject: ${formData.subject}\n\n${formData.message}`
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        resetForm();
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form submission error:', error);
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'prasanth.dev@email.com',
      link: 'mailto:prasanth.dev@email.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/prasanth',
      color: '#333'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/prasanth',
      color: '#0077b5'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com/prasanth',
      color: '#1da1f2'
    },
    {
      icon: <MessageCircle size={24} />,
      name: 'Discord',
      url: 'https://discord.com/users/prasanth',
      color: '#7289da'
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2>Let's Work Together</h2>
            <p className="section-subtitle">
              Ready to bring your ideas to life? I'm always excited to discuss new opportunities and projects.
            </p>
          </motion.div>

          <div className="contact-main">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-card glass-effect">
                <h3>Get In Touch</h3>
                <p>
                  I'm currently available for freelance work and full-time opportunities.
                  Whether you have a project in mind or just want to chat about technology,
                  feel free to reach out!
                </p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-method"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="method-icon">
                        <AnimatedIcon
                          Icon={() => info.icon}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        />
                      </div>
                      <div className="method-info">
                        <span className="method-title">{info.title}</span>
                        <span className="method-value">{info.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-links">
                  <h4>Find me on</h4>
                  <div className="social-grid">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AnimatedIcon
                          Icon={() => social.icon}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        />
                        <span>{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-section" variants={itemVariants}>
              <div className="form-card glass-effect">
                <h3>Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <AnimatedInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        index={0}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <AnimatedInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        index={1}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <AnimatedInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project discussion, Job opportunity, etc."
                      index={2}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <AnimatedTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, requirements, timeline, budget, etc."
                      index={3}
                    />
                  </div>

                  <AnimatedButton
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="submit-btn"
                  >
                    {loading ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </AnimatedButton>

                  {(submitStatus || error) && (
                    <motion.div
                      className={`submit-status ${submitStatus || 'error'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {submitStatus === 'success' ? (
                        '✅ Thank you! Your message has been sent successfully.'
                      ) : (
                        `❌ ${error || 'Sorry, there was an error sending your message. Please try again.'}`
                      )}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div className="contact-footer" variants={itemVariants}>
            <div className="footer-content">
              <div className="availability">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
                <p>
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
              
              <div className="quick-stats">
                <div className="stat">
                  <span className="stat-number gradient-text">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="stat">
                  <span className="stat-number gradient-text">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number gradient-text">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
