import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';
// import { projects } from '../data/projects';

const Projets : React.FC = () => {
    return (
      <Container maxWidth='md'>
        <Box sx={{ my: 8 }}>
          <Typography variant='h1'>Projects</Typography>
          <Typography variant='body1'>En cours de construction</Typography>
        </Box>
        {/* 
                Mettre en place la grille des projets ici avec les
                aprecus, technologies utilisées, objectifs, dates et les liens vers les projets
                + mettre un pop up de confirmation avant de rediriger vers le projet
        */}
      </Container>
    );
};

export default Projets