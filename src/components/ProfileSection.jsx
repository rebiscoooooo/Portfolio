import React from 'react';

const ProfileSection = ({ member }) => {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-[2px] mb-2">ABOUT ME</h2>
        <p className="gradient-text font-medium text-lg">Get to know more</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="glass-strong p-8 sm:p-12 flex flex-col items-center text-center lg:col-span-1">
          <div className="glass-light w-[120px] h-[120px] rounded-full overflow-hidden text-5xl font-bold text-accentPrimary mb-6 flex items-center justify-center shadow-lg">
            {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : member.initials}
          </div>
          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
          <p className="gradient-text font-medium">{member.role}</p>
          <div className="w-[50px] h-[2px] bg-glassBorderHover my-8"></div>
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-accentPrimary mb-0">{member.projects.length}</h4>
              <p className="text-textSecondary text-sm uppercase tracking-[1px] font-medium">Projects</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-accentPrimary mb-0">{member.skills.length}</h4>
              <p className="text-textSecondary text-sm uppercase tracking-[1px] font-medium">Skills</p>
            </div>
          </div>
        </div>

        <div className="glass-strong p-8 sm:p-12 flex flex-col justify-center lg:col-span-2">
          <h3 className="text-3xl font-bold mb-6">Biography</h3>
          <p className="text-lg text-textSecondary leading-[1.8] mb-10">
            {member.bio}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold gradient-text mb-4">Interests</h4>
              <ul className="flex flex-wrap gap-3">
                {member.interests.map((interest, index) => (
                  <li key={index} className="glass-light px-4 py-2 text-sm rounded-full font-medium">{interest}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold gradient-text mb-4">Career Goal</h4>
              <p className="text-textSecondary font-medium leading-relaxed">{member.careerGoal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
