import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import logoImg from '../assets/images/logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-4 lg:p-6 transition-custom">
      <nav className="glass-strong px-6 lg:px-8 py-3 mx-auto max-w-[1100px] w-full flex items-center justify-between rounded-full border border-glassBorderHover shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
        <div className="flex items-center">
          <img src={logoImg} alt="Ctrl+Alt+Defeat Logo" className="h-10 lg:h-14 object-contain logo-img" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`px-5 py-2 rounded-full font-bold text-[0.8rem] lg:text-[0.9rem] uppercase tracking-[2px] transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'nav-link-active'
                  : 'text-textPrimary hover:bg-glassLight hover:text-accentPrimary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden glass-light text-textPrimary cursor-pointer flex items-center justify-center p-2 rounded-full transition-custom hover:bg-glassMedium"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] p-8 mt-4 rounded-2xl flex flex-col glass-strong md:hidden">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-xl font-bold uppercase tracking-[3px] transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'mobile-link-active'
                    : 'text-textPrimary hover:text-accentPrimary'
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
