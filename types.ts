
export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  isEducation?: boolean;
}
