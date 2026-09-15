import React from 'react';

const MemberSelector = ({ members, activeMember, setActiveMember }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-[2px] mb-2">SELECT PROFILE</h2>
        <p className="gradient-text font-medium text-lg">Meet our team members</p>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {members.map(member => {
          const isActive = activeMember.id === member.id;
          
          return (
            <div 
              key={member.id}
              className={`glass-card p-10 flex flex-col items-center text-center cursor-pointer relative overflow-hidden group ${isActive ? 'glass-strong border-accentPrimary -translate-y-1' : 'glass'}`}
              onClick={() => setActiveMember(member)}
            >
              <div className={`w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center text-4xl font-bold mb-6 transition-custom ${isActive ? 'bg-accent-gradient btn-adaptive-text scale-105' : 'glass-light text-textPrimary group-hover:bg-accent-gradient group-hover:btn-adaptive-text group-hover:scale-105'}`}>
                {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : member.initials}
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold leading-[1.4] mb-2">{member.name.split(' ').map((part, i, arr) => 
                  i === 0 ? <span key={i}>{part}<br/></span> : <span key={i}>{part} </span>
                )}</h3>
                <p className="gradient-text font-medium">{member.role}</p>
              </div>
              {isActive && <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MemberSelector;
