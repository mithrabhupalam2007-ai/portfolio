/**
 * All portfolio content lives here.
 * Edit this one file to change the text, skills, projects and links on the site.
 */

export const profile = {
  name: 'B V Mithra',
  firstName: 'Mithra',
  initials: 'BM',
  role: 'B.Tech CSE Student',
  college: 'Global Academy of Technology',
  tagline:
    'I build clean, responsive things for the web while I finish my Computer Science degree.',
  location: 'Bengaluru, India',
  email: 'mithrabhupalam2007@gmail.com',
  github: 'https://github.com/mithrabhupalam2007-ai',
  linkedin: 'https://www.linkedin.com/in/mithra-bhupalam-7b737538b',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "Hi, I'm B V Mithra — a Computer Science & Engineering undergraduate at Global Academy of Technology.",
    'I enjoy turning ideas into interfaces: fast, accessible websites that feel good to use. Most of my time goes into sharpening the fundamentals — data structures, problem solving and modern front-end development.',
    "I'm currently looking for internships and collaboration on projects where I can learn, contribute and grow as an engineer.",
  ],
  facts: [
    { label: 'Degree', value: 'B.Tech, Computer Science & Engineering' },
    { label: 'College', value: 'Global Academy of Technology' },
    { label: 'Focus', value: 'Front-end & full-stack web development' },
    { label: 'Status', value: 'Open to internships' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    title: 'Web',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
  },
]

export const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A responsive single-page portfolio built with React and Vite — the site you are looking at right now.',
    tags: ['React', 'Vite', 'CSS3'],
    source: 'https://github.com/mithrabhupalam2007-ai/portfolio',
    demo: '',
  },
  {
    title: 'globalcollege.demo',
    description:
      'My first Git repository — the starting point of my version-control and open-source journey.',
    tags: ['Git', 'GitHub'],
    source: 'https://github.com/mithrabhupalam2007-ai/globalcollege.demo',
    demo: '',
  },
  {
    title: 'More coming soon',
    description:
      'Currently working on new projects — web apps, data structures practice and a few experiments. Stay tuned!',
    tags: ['In progress'],
    source: '',
    demo: '',
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institute: 'Global Academy of Technology',
    period: 'Pursuing',
    highlights:
      'Coursework in data structures & algorithms, operating systems, DBMS, computer networks and software engineering.',
  },
  {
    degree: 'Higher Secondary (PCM + Computer Science)',
    institute: 'Higher Secondary Education',
    period: 'Completed',
    highlights: 'Built the foundation in mathematics, logic and programming basics.',
  },
]
