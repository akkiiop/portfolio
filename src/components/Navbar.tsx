import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Handle scroll background */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  /* Close menu when screen resized to desktop */
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  /* Scroll helper */
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset = section.offsetTop - 60;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen
        ? "bg-gray-950 shadow-lg border-b border-gray-800"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <span
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              Akshay<span className="text-indigo-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            {/* Links */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-indigo-400 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-l border-gray-700 pl-8">

              <a
                href="https://github.com/akkiiop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:kawadeakshay93@gmail.com"
                className="text-gray-400 hover:text-white transition"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-indigo-400 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40 md:hidden transform transition-transform duration-300 ${isMenuOpen ? "translate-y-0 shadow-xl" : "-translate-y-full"
          }`}
      >
        <div className="px-4 py-6 space-y-2">

          {/* Links */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-lg font-medium transition"
            >
              {item.label}
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 pt-6 border-t border-gray-800 mt-4">

            <a
              href="https://github.com/akkiiop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/akshay-kawade-67a5a5324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:kawadeakshay93@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <Mail size={24} />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
