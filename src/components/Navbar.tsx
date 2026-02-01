import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 100 || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-white">Akshay<span className="text-indigo-500">.</span></span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/akkiiop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kawadeakshay93@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-400 hover:bg-gray-800 focus:outline-none transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:text-indigo-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="px-4 py-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Social Links */}
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm mb-4 px-4">Connect with me</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/akkiiop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-indigo-600 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-indigo-600 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kawadeakshay93@gmail.com"
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-indigo-600 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
