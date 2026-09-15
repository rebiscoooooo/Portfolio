import React from 'react';

const Statistics = ({ members }) => {
  // Compute some basic statistics from data
  const totalMembers = members.length;
  const totalProjects = members.reduce((acc, member) => acc + member.projects.length, 0);
  const totalSkills = members.reduce((acc, member) => acc + member.skills.length, 0);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
        <div className="p-8 sm:p-12 rounded-[20px] glass-card glass-strong text-center">
          <h3 className="text-5xl sm:text-6xl font-bold mb-2 gradient-text">{totalMembers < 10 ? `0${totalMembers}` : totalMembers}</h3>
          <p className="text-[1rem] sm:text-[1.1rem] font-medium text-textSecondary uppercase tracking-[1px]">Creative Minds</p>
        </div>
        
        <div className="p-8 sm:p-12 rounded-[20px] glass-card glass-strong text-center">
          <h3 className="text-5xl sm:text-6xl font-bold mb-2 gradient-text">{totalProjects < 10 ? `0${totalProjects}` : totalProjects}+</h3>
          <p className="text-[1rem] sm:text-[1.1rem] font-medium text-textSecondary uppercase tracking-[1px]">Projects Completed</p>
        </div>
        
        <div className="p-8 sm:p-12 rounded-[20px] glass-card glass-strong text-center">
          <h3 className="text-5xl sm:text-6xl font-bold mb-2 gradient-text">{totalSkills < 10 ? `0${totalSkills}` : totalSkills}+</h3>
          <p className="text-[1rem] sm:text-[1.1rem] font-medium text-textSecondary uppercase tracking-[1px]">Technical Skills</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
