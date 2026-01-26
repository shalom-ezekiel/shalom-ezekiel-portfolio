export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  achievement: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: 'layout' | 'server' | 'terminal' | 'shield' | 'database' | 'users';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
}

export enum Section {
  HERO = 'HERO',
  PROJECTS = 'PROJECTS',
  SKILLS = 'SKILLS',
  RESUME = 'RESUME',
  BLOG = 'BLOG',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}