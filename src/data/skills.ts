import { Skill } from '../types';
import { Code2, Server, Database, Wrench, Link, Layers } from 'lucide-react';

export const skills: Skill[] = [
  // 🚀 MERN Stack
  { id: 1, name: 'MongoDB', category: 'mern', icon: 'Layers' },
  { id: 2, name: 'Express.js', category: 'mern', icon: 'Layers' },
  { id: 3, name: 'React.js', category: 'mern', icon: 'Layers' },
  { id: 4, name: 'Node.js', category: 'mern', icon: 'Layers' },

  // 💻 Programming Languages
  { id: 5, name: 'JavaScript', category: 'languages', icon: 'Code2' },
  { id: 6, name: 'TypeScript', category: 'languages', icon: 'Code2' },
  { id: 7, name: 'HTML5', category: 'languages', icon: 'Code2' },
  { id: 8, name: 'CSS3', category: 'languages', icon: 'Code2' },
  { id: 9, name: 'Java', category: 'languages', icon: 'Code2' },

  // ⚙️ Frameworks & Libraries
  { id: 10, name: 'Tailwind CSS', category: 'frameworks', icon: 'Server' },
  { id: 11, name: 'Bootstrap', category: 'frameworks', icon: 'Server' },

  // 🔗 Backend & APIs
  { id: 12, name: 'RESTful APIs', category: 'backend', icon: 'Link' },
  { id: 13, name: 'JWT Authentication', category: 'backend', icon: 'Link' },

  // 🗄️ Databases
  { id: 14, name: 'MySQL', category: 'databases', icon: 'Database' },

  // 🛠️ Tools & Platforms
  { id: 15, name: 'Git & GitHub', category: 'tools', icon: 'Wrench' },
  { id: 16, name: 'VS Code', category: 'tools', icon: 'Wrench' },
  { id: 17, name: 'MySQL Workbench', category: 'tools', icon: 'Wrench' },
];

export const getIconComponent = (iconName: string | undefined) => {
  if (!iconName) return null;

  switch (iconName) {
    case 'Code2':
      return Code2;
    case 'Server':
      return Server;
    case 'Database':
      return Database;
    case 'Wrench':
      return Wrench;
    case 'Link':
      return Link;
    case 'Layers':
      return Layers;
    default:
      return null;
  }
};
