import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-gray-950 shadow-lg border-b border-gray-800' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <span
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Akshay<span className="text-indigo-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation & Social Links */}
          <div className="hidden md:flex items-center space-x-8 desktop-only">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white hover:text-indigo-400 font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-gray-700 pl-8">
              <a href="https://github.com/akkiiop" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kawadeakshay93@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Explicitly Visible */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-100 hover:text-indigo-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-y-0 shadow-xl' : '-translate-y-full'
          }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-lg font-medium transition-all"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-8 pt-6 border-t border-gray-800 mt-4">
            <a href="https://github.com/akkiiop" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kawadeakshay93@gmail.com" className="text-gray-400 hover:text-white hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
