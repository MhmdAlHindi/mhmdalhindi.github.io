
export interface Project {
  id: string;
  title: string;
  description: string[];
  tech: string[];
  date: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  points: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
