import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const HeaderSection: React.FC = () => {
  return (
    <Container maxWidth='md' sx={{ textAlign: 'center', my: 8 }}>
      <Box sx={{ p: 4 }}>
        <Box
          component='img'
          sx={{
            height: 200,
            width: 200,
            borderRadius: '50%',
            objectFit: 'cover',
            mb: 2,
          }}
          alt='Votre photo de profil'
          src='https://placehold.co/250x250/png'
        />
        <Typography variant='h2' component='h1' gutterBottom>
          Johan Yindou
        </Typography>
        <Typography variant='h5' color='text.secondary' gutterBottom>
          Concepteur Développeur d'Applications Web
        </Typography>
        <Typography variant='body1' sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
          Principales compétences : HTML, CSS, JavaScript, React, Node.js, etc.
        </Typography>
      </Box>
    </Container>
  );
};

export default HeaderSection;
