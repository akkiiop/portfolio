import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/80'
      }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-xl font-bold text-white">
            Akshay<span className="text-indigo-500">.</span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/akkiiop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kawadeakshay93@gmail.com" className="text-gray-300 hover:text-white">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex space-x-4 px-4 pt-4 border-t border-gray-700 mt-4">
              <a href="https://github.com/akkiiop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2 bg-gray-800 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2 bg-gray-800 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kawadeakshay93@gmail.com" className="text-gray-300 hover:text-white p-2 bg-gray-800 rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
