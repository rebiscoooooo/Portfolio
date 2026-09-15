import React from 'react';
import logoImg from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="py-12 mt-24 border-t border-glassBorder glass-light mt-auto">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <img src={logoImg} alt="Ctrl+Alt+Defeat Logo" className="h-24 md:h-32 mb-8 object-contain logo-img" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center text-textPrimary font-medium mb-6 flex-wrap">
          <span>Jay-ar S. De Guzman</span>
          <span className="hidden md:inline text-accentPrimary">•</span>
          <span>Sheryn Mae S. De Vera</span>
          <span className="hidden md:inline text-accentPrimary">•</span>
          <span>Jayveelyn C. Vicente</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
