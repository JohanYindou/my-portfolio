// src/data/services.ts

import { Code, Storage, Brush, RocketLaunch } from '@mui/icons-material';
import type { ReactNode } from 'react';

export interface Service {
  id: number | string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: <Code fontSize='large' color='primary' />,
    title: 'Frontend',
    description:
      'Création d’interfaces modernes et réactives avec React et TypeScript.',
  },
  {
    id: 2,
    icon: <Storage fontSize='large' color='primary' />,
    title: 'Backend',
    description:
      'Développement d’API performantes et sécurisées avec Node.js et Express.',
  },
  {
    id: 3,
    icon: <Brush fontSize='large' color='primary' />,
    title: 'UI / UX Design',
    description:
      'Conception d’expériences utilisateurs intuitives et esthétiques.',
  },
  {
    id: 4,
    icon: <RocketLaunch fontSize='large' color='primary' />,
    title: 'Déploiement',
    description: 'Mise en ligne, maintenance et optimisation continue.',
  },
];
