import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import HeaderSection from '../components/HeaderSection';
import ProjectsSection from '../components/ProjectsSection';

const Home: React.FC = () => {
  return (
    <>
      {/* --- Menu de navigation (AppBar) --- */}
      <Navbar />
      {/* --- Conteneur 1 : Entête du portfolio --- */}
      <HeaderSection />
      {/* --- Conteneur 2 : Section des projets --- */}
      <ProjectsSection />
    </>
  );
};

export default Home;
