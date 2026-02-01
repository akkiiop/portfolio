import { Skill } from '../types';
import { Code2, Server, Database, Wrench, Link } from 'lucide-react';

export const skills: Skill[] = [
  // 💻 Programming Languages
  { id: 1, name: 'JavaScript', category: 'languages', icon: 'Code2' },
  { id: 2, name: 'TypeScript', category: 'languages', icon: 'Code2' },
  { id: 3, name: 'HTML5', category: 'languages', icon: 'Code2' },
  { id: 4, name: 'CSS3', category: 'languages', icon: 'Code2' },
  { id: 5, name: 'Java', category: 'languages', icon: 'Code2' },

  // ⚙️ Frameworks & Libraries
  { id: 6, name: 'React.js', category: 'frameworks', icon: 'Server' },
  { id: 7, name: 'Node.js', category: 'frameworks', icon: 'Server' },
  { id: 8, name: 'Express.js', category: 'frameworks', icon: 'Server' },
  { id: 9, name: 'Tailwind CSS', category: 'frameworks', icon: 'Server' },
  { id: 10, name: 'Bootstrap', category: 'frameworks', icon: 'Server' },

  // 🔗 Backend & APIs
  { id: 11, name: 'RESTful APIs', category: 'backend', icon: 'Link' },
  { id: 12, name: 'JWT Authentication', category: 'backend', icon: 'Link' },

  // 🗄️ Databases
  { id: 13, name: 'MongoDB', category: 'databases', icon: 'Database' },
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
    default:
      return null;
  }
};
