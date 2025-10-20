// src/data/skills.ts

export type Skill =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'React'
  | 'Next.js'
  | 'Symfony'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'Git'
  | 'GitHub'
  | 'Docker'
  | 'Figma'
  | 'TypeScript'

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Symfony',
      'TypeScript',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB',],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
  {
    category: 'Design',
    items: ['Figma'],
  },
];
