export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  role: string;
  featuredAward?: string;
  featuredAwardYear?: string;
  highlights: string[];
  architectureOverview: string;
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  visualType: 'presentplus' | 'loanlens' | 'placement' | 'agentic';
}

export interface Experience {
  year: string;
  period: string;
  role: string;
  company: string;
  locationType: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Achievement {
  number: string;
  place: string;
  title: string;
  context: string;
  subcontext: string;
  year: string;
  description: string;
  tags: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  details?: string;
}

export interface BuildDomain {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export type CursorType = 'default' | 'link' | 'project' | 'cta' | 'hidden';
