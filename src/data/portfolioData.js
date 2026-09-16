import jayarImg from '../assets/images/jay-ar.jpg';
import sherynImg from '../assets/images/sheryn.jpg';
import jayveeImg from '../assets/images/jayvee.jpg';
import Project_1Img from '../assets/images/project_1.png';
import Project_2Img from '../assets/images/project_2.png';

export const members = [
  {
    id: 1,
    name: "Jay-ar S. De Guzman",
    initials: "JD",
    image: jayarImg,
    role: "Lead Developer",
    tagline: "Building scalable web solutions.",
    bio: "Passionate about creating clean, efficient, and responsive web applications. I focus on bridging the gap between design and engineering to build seamless user experiences.",
    interests: ["Web Technologies", "System Architecture"],
    careerGoal: "To become a Full Stack Architect leading innovative tech projects.",
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Information Technology",
        institution: "Central Luzon State University",
        year: "2023 - Present",
        description: "Focusing on Software Systems and Web Applications Engineering."
      },
      {
        id: 2,
        degree: "Senior High School - ICT",
        institution: "Muñoz National High School",
        year: "2021 - 2023",
        description: "Specialized in computer systems servicing logic."
      }
    ],
    skills: [
      { id: 1, name: "React", category: "Frontend", level: 80 },
      { id: 2, name: "Laravel", category: "Backend", level: 75 },
      { id: 3, name: "PHP", category: "Backend", level: 90 },
      { id: 4, name: "Tailwind CSS", category: "Frontend", level: 95 },
      { id: 5, name: "Bootstrap", category: "Frontend", level: 90 },
      { id: 6, name: "Node.js", category: "Backend", level: 80 },
      { id: 7, name: "MySQL", category: "Database", level: 90 },
      { id: 8, name: "GitHub", category: "Tools", level: 90 },
      { id: 9, name: "Figma", category: "UI/UX", level: 85 }
    ],
    projects: [
      {
        id: 1,
        title: "Infinite-Limitless Website",
        description: "A full-stack website for displaying the products and company of our client with dashboard.",
        category: "WEB",
        technologies: ["PHP", "Tailwind CSS", "MySQL"],
        year: "2025",
        image: Project_1Img,
        link: "www.infinite-limitless.com",
        github: "#"
      },
      {
        id: 2,
        title: "CED E-Services",
        description: "CLSU, College of Education Registrar's E-Services",
        category: "WEB",
        technologies: ["Laravel", "React Inertia", "Tailwind CSS" ,"MySQL"],
        year: "2026",
        image: Project_2Img,
        link: "https://cyan-baboon-990324.hostingersite.com/",
        github: "#"
      }
    ],
    socials: [
      { id: 1, platform: "GitHub", url: "#" },
      { id: 2, platform: "LinkedIn", url: "#" },
      { id: 3, platform: "Facebook", url: "www.facebook.com/jayarsaturnodeguzman1" }
    ]
  },
  {
    id: 2,
    name: "Sheryn Mae S. De Vera",
    initials: "SD",
    image: sherynImg,
    role: "UI/UX Designer",
    tagline: "Designing intuitive digital experiences.",
    bio: "I specialize in creating visually appealing and user-centric designs. My goal is to make interfaces that are not only beautiful but also highly functional and accessible.",
    interests: ["UI Design", "User Research", "Digital Art"],
    careerGoal: "To lead a design team creating impactful digital products.",
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Information Technology",
        institution: "Central Luzon State University",
        year: "2024 - Present",
        description: "Focusing on Web Applications Development II."
      },
      {
        id: 2,
        degree: "Senior High School - Arts & Design",
        institution: "Previous School",
        year: "2024",
        description: "Developed strong foundational skills in visual communication."
      }
    ],
    skills: [
      { id: 1, name: "Figma", category: "UI/UX", level: 95 },
      { id: 2, name: "React", category: "Frontend", level: 80 },
      { id: 3, name: "Tailwind CSS", category: "Frontend", level: 90 },
      { id: 4, name: "Bootstrap", category: "Frontend", level: 85 },
      { id: 5, name: "HTML", category: "Frontend", level: 95 },
      { id: 6, name: "PHP", category: "Backend", level: 70 },
      { id: 7, name: "Adobe XD", category: "UI/UX", level: 85 },
      { id: 8, name: "Illustrator", category: "Tools", level: 90 }
    ],
    projects: [
      {
        id: 1,
        title: "CED E-Services",
        description: "CLSU, College of Education Registrar's E-Services",
        category: "WEB",
        technologies: ["Laravel", "React Inertia", "Tailwind CSS" ,"MySQL"],
        year: "2026",
        image: Project_2Img,
        link: "https://cyan-baboon-990324.hostingersite.com/",
        github: "#"
      },
      {
        id: 2,
        title: "Portfolio Template",
        description: "A reusable, responsive portfolio template for creatives.",
        category: "WEB",
        technologies: ["HTML", "CSS", "JS"],
        year: "2026",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
      }
    ],
    socials: [
      { id: 1, platform: "GitHub", url: "#" },
      { id: 2, platform: "LinkedIn", url: "#" },
      { id: 3, platform: "Facebook", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Jayveelyn C. Vicente",
    initials: "JV",
    image: jayveeImg,
    role: "Frontend Engineer",
    tagline: "Crafting interactive user interfaces.",
    bio: "Focused on bringing designs to life through clean code and smooth animations. I love exploring new frontend frameworks and optimizing web performance.",
    interests: ["Frontend Architecture", "Web Animations", "Mobile Development"],
    careerGoal: "To become a Senior Frontend Engineer at a top tech company.",
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Information Technology",
        institution: "Central Luzon State University",
        year: "2024 - Present",
        description: "Focusing on Web Applications Development II."
      },
      {
        id: 2,
        degree: "Senior High School - ICT",
        institution: "Previous School",
        year: "2024",
        description: "Specialized in computer programming and networking."
      }
    ],
    skills: [
      { id: 1, name: "React", category: "Frontend", level: 90 },
      { id: 2, name: "Vue.js", category: "Frontend", level: 80 },
      { id: 3, name: "Tailwind CSS", category: "Frontend", level: 95 },
      { id: 4, name: "Bootstrap", category: "Frontend", level: 90 },
      { id: 5, name: "HTML", category: "Frontend", level: 95 },
      { id: 6, name: "PHP", category: "Backend", level: 75 },
      { id: 7, name: "CSS Animations", category: "UI/UX", level: 85 },
      { id: 8, name: "Figma", category: "UI/UX", level: 80 }
    ],
    projects: [
      {
        id: 1,
        title: "CED E-Services",
        description: "CLSU, College of Education Registrar's E-Services",
        category: "WEB",
        technologies: ["Laravel", "React Inertia", "Tailwind CSS" ,"MySQL"],
        year: "2026",
        image: Project_2Img,
        link: "https://cyan-baboon-990324.hostingersite.com/",
        github: "#"
      },
      {
        id: 2,
        title: "Weather Dashboard",
        description: "Real-time weather application with beautiful animated icons.",
        category: "WEB",
        technologies: ["React", "API", "CSS"],
        year: "2026",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
      }
    ],
    socials: [
      { id: 1, platform: "GitHub", url: "#" },
      { id: 2, platform: "LinkedIn", url: "#" },
      { id: 3, platform: "Facebook", url: "#" }
    ]
  }
];
