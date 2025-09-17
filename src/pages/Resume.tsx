import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';

const Resume: React.FC = () => {
    return (
      <Container maxWidth='md'>
        <Box sx={{ my: 8 }}>
          <Typography variant='h1'>Resume</Typography>
          <Typography variant='body1'>En cours de construction</Typography>
        </Box>
        {/* 
                Mettre en place les CV ici 
                ( option pour sélectioner le type de CV ) 
                + un bouton de download
        */}
      </Container>
    );
};

export default Resume;