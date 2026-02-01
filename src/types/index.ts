export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  score?: string;
}


export interface Skill {
  id: number;
  name: string;
  category: 'mern' | 'languages' | 'frameworks' | 'backend' | 'databases' | 'tools';
  icon?: string;
}