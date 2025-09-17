import React from 'react';
import '../styles/App.css';
import HeaderSection from '../components/HeaderSection';
import ProjectsSection from '../components/ProjectsSection';

const Home: React.FC = () => {
  return (
    <>
      {/* --- Menu de navigation (AppBar) --- */}

      {/* --- Conteneur 1 : Entête du portfolio --- */}
      <HeaderSection />
      {/* --- Conteneur 2 : Section des projets --- */}
      <ProjectsSection />
      {/* --- Conteneur 3 : Pied de page --- */}
    </>
  );
};

export default Home;
