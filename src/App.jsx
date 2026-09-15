import React, { useState, useEffect } from 'react';
import { members } from './data/portfolioData';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MemberSelector from './components/MemberSelector';
import ProfileSection from './components/ProfileSection';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeMember, setActiveMember] = useState(members[0]);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {/* Background Animated Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero activeMember={activeMember} />
        <MemberSelector 
          members={members} 
          activeMember={activeMember} 
          setActiveMember={setActiveMember} 
        />
        <ProfileSection member={activeMember} />
        <Education education={activeMember.education} />
        <Skills skills={activeMember.skills} />
        <Projects projects={activeMember.projects} />
        <Statistics members={members} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
