import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';


const Contact: React.FC = () => {
    return (
      <Container maxWidth='md'>
        <Box sx={{ my: 8 }}>
          <Typography variant='h1'>Contact</Typography>
          <Typography variant='body1'>En cours de construction</Typography>
        </Box>
        {/* 
                Mettre en place mes informations de contact 
                et le formulaire de contact ici qui envoie 
                des emails vers moi 
        */}
      </Container>
    );
};

export default Contact;