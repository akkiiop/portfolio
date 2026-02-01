import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nutralyze AI – Smart Nutrition Platform',
    description: 'An intelligent web-based nutrition platform using AI and computer vision to analyze food images, packaged products, and daily meals. Features include calorie tracking, macro analysis, diet planning, health progress monitoring, and harmful ingredient detection.',
    date: 'Jan 2026',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Computer Vision', 'Groq API', 'Material UI', 'JWT'],
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Wanderlust - Travel Blog Platform',
    description: 'A MERN stack-based travel blogging web application where users can create, read, and manage travel blogs. Features include user authentication, blog posting with rich text, commenting, likes, and a responsive design for a smooth experience across devices.',
    date: 'Jan 2025',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
    imageUrl: 'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/akkiiop/Internship-Project',
  }
];