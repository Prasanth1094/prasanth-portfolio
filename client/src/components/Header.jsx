import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedNavLink, AnimatedIcon, AnimatedContainer } from '../shared/components';
import './Header.css';
import '../shared/components/SharedComponents.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoize sections and navItems to prevent unnecessary re-renders
  const sections = useMemo(() => ['home', 'about', 'skills', 'experience', 'projects', 'contact'], []);

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setScrolled(offset > 50);

    // Find which section is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if section is in viewport (considering header height)
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sections[i]);
          // Update URL hash without triggering scroll
          window.history.replaceState(null, null, `#${sections[i]}`);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleInitialHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    
    if (hash && sections.includes(hash)) {
      setActiveSection(hash);
    } else {
      // Default to home if no hash or invalid hash
      setActiveSection('home');
      window.history.replaceState(null, null, '#home');
    }
  }, [sections]);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    
    if (hash && sections.includes(hash)) {
      setActiveSection(hash);
    }
  }, [sections]);

  // Handle initial URL hash on page load
  useEffect(() => {
    handleInitialHash();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleInitialHash, handleHashChange]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleNavClick = useCallback((sectionId, event) => {
    event.preventDefault();
    setActiveSection(sectionId);
    setIsOpen(false);
    
    // Update URL
    window.history.pushState(null, null, `#${sectionId}`);
    
    // Smooth scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Adjust based on your header height
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">Prasanth</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <AnimatedNavLink
                key={item.name}
                href={item.href}
                isActive={activeSection === item.id}
                index={index}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.name}
              </AnimatedNavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="menu-toggle"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatedIcon
              Icon={isOpen ? X : Menu}
              size={24}
              initial={{ scale: 1 }}
              animate={{ rotate: isOpen ? 180 : 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatedContainer
          className={`nav-mobile ${isOpen ? 'open' : ''}`}
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          tag="nav"
        >
          {navItems.map((item, index) => (
            <AnimatedNavLink
              key={item.name}
              href={item.href}
              className="nav-link-mobile"
              isActive={activeSection === item.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                  transition: { delay: index * 0.1 },
                },
              }}
              onClick={(e) => handleNavClick(item.id, e)}
            >
              {item.name}
            </AnimatedNavLink>
          ))}
        </AnimatedContainer>
      </div>
    </motion.header>
  );
};

export default Header;
