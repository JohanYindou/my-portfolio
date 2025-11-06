// src/pages/Home.tsx
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import ProjectsBlock from '../components/Home/ProjectsBlock';
import QuickContactSection from '../components/Home/QuickContactSection';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <ProjectsBlock />
      <QuickContactSection />
    </Box>
  );
};

export default Home;
