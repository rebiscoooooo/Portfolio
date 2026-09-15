# 3-Person Glassmorphism Portfolio

A premium, aesthetic, and fully responsive 3-person portfolio website built with React.js, Vite, and **Tailwind CSS**. This project is submitted for **INTECH 3112 – Web Applications Development II**, First Semester A.Y. 2026–2027, Second Term Project.

## Team Members
* Jay-ar S. De Guzman
* Sheryn Mae S. De Vera
* Jayveelyn C. Vicente

## Design System
* **Theme**: Deep navy / charcoal background with subtle blue and violet glowing orbs.
* **Glassmorphism**: Implementation of varying glass intensities (`glass-light`, `glass-medium`, `glass-strong`) using Tailwind's `backdrop-blur` utility classes.
* **Dark / Light Mode**: Reactive UI toggle for elegant themes.
* **Responsive Design**: Completely fluid layout using Tailwind's grid/flex utilities and breakpoint prefixes. Mobile-first optimizations implemented without layout breakage.

## Project Structure (Component Architecture)
The source code is organized into reusable components using Tailwind CSS for styling:
```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── MemberSelector.jsx
│   ├── ProfileSection.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Statistics.jsx
│   ├── Contact.jsx
│   ├── ThemeToggle.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js
├── App.jsx
├── main.jsx
├── index.css
└── tailwind.config.js
```

## Implementation Highlights
* **Props Demonstration**: Extensively utilized to pass member information (`projects`, `skills`, `education`) from `App.jsx` to sub-components (e.g., `<ProfileSection member={activeMember} />`).
* **Dynamic Rendering (`.map()`)**: Automatically renders skill cards, project grids, timelines, and tags using array mapping based on `portfolioData.js`.
* **State Management (`useState`)**: Used for driving core interactive functionalities:
  * Profile Switching (`activeMember`)
  * Theme Toggling (`darkMode`)
  * Mobile Navigation Menu (`isOpen`)
  * Project Filtering (`activeFilter`)
  * Form Submission (`formData` & `isSubmitted`)

## Getting Started
### Prerequisites
* Node.js installed on your machine

### Installation
1. Clone the repository or extract the project folder.
2. Navigate to the project directory:
   ```bash
   cd three-person-glass-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to the local server URL provided (typically `http://localhost:5173`).

## Technologies Used
* **React.js (18+)**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
