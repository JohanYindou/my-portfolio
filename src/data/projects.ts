// src/data/projects.ts

// On définit une interface pour typer nos objets "projet".
// C'est une bonne pratique avec TypeScript pour assurer la cohérence des données.
export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

// On exporte la constante pour pouvoir l'importer ailleurs
export const projects: Project[] = [
  {
    name: 'Projet 1',
    description: 'Une description concise du projet 1.',
    image: 'https://placehold.co/200x200/png',
    technologies: ['React', 'MUI', 'TypeScript'],
  },
  {
    name: 'Projet 2',
    description: 'Une description concise du projet 2.',
    image: 'https://placehold.co/200x200/png',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
  },
  {
    name: 'Projet 3',
    description: 'Une description concise du projet 3.',
    image: 'https://placehold.co/200x200/png',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  // Vous pouvez facilement ajouter de nouveaux projets ici
];
