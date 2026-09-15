import React from 'react';
import { FaReact, FaNodeJs, FaFigma, FaHtml5, FaVuejs, FaGithub, FaPaintBrush, FaCss3Alt, FaLaravel, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiTailwindcss, SiFirebase, SiVite } from 'react-icons/si';

const getSkillIcon = (name) => {
  const iconMap = {
    'React': <FaReact className="text-blue-500" />,
    'React.js': <FaReact className="text-blue-500" />,
    'JavaScript (ES6+)': <SiJavascript className="text-yellow-400" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'MySQL': <SiMysql className="text-blue-600" />,
    'Figma': <FaFigma className="text-pink-500" />,
    'Git & GitHub': <FaGithub className="text-textPrimary" />,
    'GitHub': <FaGithub className="text-textPrimary" />,
    'Adobe XD': <FaPaintBrush className="text-pink-700" />,
    'HTML/CSS': <FaHtml5 className="text-orange-500" />,
    'HTML': <FaHtml5 className="text-orange-500" />,
    'Illustrator': <FaPaintBrush className="text-orange-600" />,
    'Vue.js': <FaVuejs className="text-green-500" />,
    'CSS Animations': <FaCss3Alt className="text-blue-500" />,
    'React Native': <FaReact className="text-blue-400" />,
    'Firebase': <SiFirebase className="text-yellow-500" />,
    'Vite': <SiVite className="text-purple-500" />,
    'Laravel': <FaLaravel className="text-red-500" />,
    'PHP': <FaPhp className="text-indigo-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Bootstrap': <FaBootstrap className="text-purple-600" />
  };
  return iconMap[name] || null;
};

const SkillCard = ({ skill }) => {
  return (
    <div className="p-6 glass-strong glass-card flex flex-col gap-5 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-gradient rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-custom"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl drop-shadow-md">{getSkillIcon(skill.name)}</span>
          </div>
          <div>
            <h4 className="text-[1.1rem] m-0 font-bold tracking-wide">{skill.name}</h4>
            <span className="text-[0.7rem] uppercase tracking-[2px] text-accentPrimary font-bold mt-1 block">
              {skill.category}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-2">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-textSecondary">
            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
          </span>
          <span className="text-lg font-bold gradient-text">{skill.level}%</span>
        </div>
        <div className="w-full h-2.5 bg-glassBorder rounded-full overflow-hidden relative shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-[2px] mb-2">SKILLS DASHBOARD</h2>
        <p className="gradient-text font-medium text-lg">Technical expertise</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
