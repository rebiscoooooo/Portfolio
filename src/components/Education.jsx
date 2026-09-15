import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-[2px] mb-2">EDUCATION</h2>
        <p className="gradient-text font-medium text-lg">Academic background</p>
      </div>

      <div className="relative max-w-[800px] mx-auto after:content-[''] after:absolute after:w-[2px] after:bg-glassBorderHover after:top-0 after:bottom-0 after:left-[31px] md:after:left-1/2 md:after:-ml-[1px]">
        {education.map((item, index) => {
          const isEven = index % 2 !== 0;
          
          return (
            <div key={item.id} className={`relative w-full md:w-1/2 px-10 py-3 box-border md:left-0 pl-[70px] pr-0 md:px-10 ${isEven ? 'md:left-1/2' : ''}`}>
              <div className={`absolute w-5 h-5 bg-accent-gradient rounded-full top-[30px] z-10 shadow-[0_0_10px_var(--accent-primary)] left-[21px] ${isEven ? 'md:-left-[10px]' : 'md:right-[10px] md:left-auto'}`}></div>
              <div className="glass-strong glass-card p-6 sm:p-8 rounded-2xl relative z-10">
                <span className="font-bold text-sm tracking-[1px] mb-2 block gradient-text">{item.year}</span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <h4 className="text-base text-textSecondary font-medium mb-4">{item.institution}</h4>
                <p className="text-textSecondary text-[0.95rem]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
