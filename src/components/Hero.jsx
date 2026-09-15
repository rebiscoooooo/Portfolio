import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa';

const getSocialIcon = (platform) => {
  const icons = {
    'GitHub': <FaGithub size={20} />,
    'LinkedIn': <FaLinkedin size={20} />,
    'Facebook': <FaFacebook size={20} />,
    'Behance': <FaBehance size={20} />,
    'Dribbble': <FaDribbble size={20} />,
    'Twitter': <FaTwitter size={20} />
  };
  return icons[platform] || platform[0];
};

const Hero = ({ activeMember }) => {
  return (
    <section id="home" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24 pt-[10rem] lg:pt-[8rem] flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen">
      <div className="flex-1 text-center lg:text-left relative z-10">
        <h2 className="text-xl font-semibold text-accentPrimary tracking-[3px] mb-6 uppercase">HELLO, WE ARE</h2>
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-heading font-bold mb-8 leading-[1.2]">
          BUILDING DIGITAL<br />
          <span className="gradient-text">EXPERIENCES.</span>
        </h1>

        <p className="text-[1.1rem] max-w-[400px] mb-10 text-textSecondary mx-auto lg:mx-0 leading-relaxed">
          We design, develop, and create meaningful digital experiences.
        </p>

        <div className="flex gap-6 justify-center lg:justify-start">
          <a href="#projects" className="btn btn-primary">Explore Portfolio</a>
          <a href="#about" className="btn btn-glass">View Profiles</a>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end items-center w-full">
        <div className="glass-strong w-full max-w-[450px] relative z-10 rounded-[2.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-glassBorderHover">
          
          {/* Ambient Glow behind card */}
          <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] bg-accent-gradient blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0"></div>

          {/* Big Faded Image */}
          <div className="w-full h-[320px] relative z-10 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)] -webkit-[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)] overflow-hidden">
            {activeMember.image ? (
              <img src={activeMember.image} alt={activeMember.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-7xl font-bold text-accentPrimary bg-glassBg">
                {activeMember.initials}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 -mt-12 relative z-20 flex flex-col items-center text-center">
            <h3 className="text-3xl font-heading font-bold mb-2 tracking-wide">{activeMember.name}</h3>
            <p className="gradient-text text-[1.1rem] font-bold uppercase tracking-[2px] mb-6">{activeMember.role}</p>
            
            <p className="text-[1.1rem] italic mb-8 text-textSecondary leading-relaxed">"{activeMember.tagline}"</p>

            <div className="flex gap-4">
              {activeMember.socials.map(social => (
                <a key={social.id} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-textPrimary hover:bg-accent-gradient hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
