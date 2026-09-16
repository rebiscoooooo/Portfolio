import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, setSelectedImage }) => {
  return (
    <div className="glass-strong glass-card flex flex-col overflow-hidden group rounded-3xl relative border-t-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgPrimary/20 pointer-events-none z-0"></div>
      
      {/* Ginawa nating clickable itong image container */}
      <div 
        className="w-full h-[240px] overflow-hidden border-b border-glassBorder relative z-10 cursor-pointer"
        onClick={() => setSelectedImage(project.image)}
      >
        <div className="absolute inset-0 bg-accentPrimary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-10">
        <span className="text-[0.75rem] font-bold tracking-[3px] mb-3 inline-block gradient-text uppercase">{project.category}</span>
        <h3 className="text-2xl font-bold mb-3 tracking-wide">{project.title}</h3>
        <p className="text-[1rem] text-textSecondary mb-6 flex-1 leading-relaxed">{project.description}</p>
        
        <div className="text-[0.85rem] text-textSecondary mb-8 flex flex-wrap items-center gap-3">
          {project.technologies.map((tech, index) => (
            <React.Fragment key={index}>
              <span className="font-medium">{tech}</span>
              {index < project.technologies.length - 1 && <span className="text-accentPrimary font-bold">•</span>}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-auto pt-5 border-t border-glassBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-[0.85rem] font-bold text-textSecondary">{project.year}</span>
          <div className="flex gap-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="btn-glass px-3 py-1.5 text-[0.85rem] rounded-md font-medium hover:bg-glassMedium hover:border-glassBorderHover transition-custom">View Project</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="btn-glass px-3 py-1.5 text-[0.85rem] rounded-md font-medium hover:bg-glassMedium hover:border-glassBorderHover transition-custom">GitHub ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null); // State para sa Image Modal
  
  const filters = ["ALL", "WEB", "UI/UX", "APP", "OTHER"];
  
  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Effect para ma-close gamit ang Escape key at ma-lock ang scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-[2px] mb-2">PROJECT SHOWCASE</h2>
        <p className="gradient-text font-medium text-lg">Recent works and creations</p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((filter, index) => (
          <button 
            key={index}
            className={`bg-glassBg border border-glassBorder px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-custom hover:bg-glassMedium ${activeFilter === filter ? 'bg-accent-gradient border-transparent btn-adaptive-text shadow-[0_4px_15px_rgba(59,130,246,0.3)]' : 'text-textPrimary'}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 lg:gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} setSelectedImage={setSelectedImage} />
          ))
        ) : (
          <div className="col-span-full p-12 rounded-xl glass-light text-center">
            <p className="text-lg font-medium text-textSecondary">No projects found for this category.</p>
          </div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          >
            {/* Custom Close Button (No Lucide Icon Needed) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Popup Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Project Fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Para hindi mag-close kapag ang mismong image ang kinlick
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;