import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HeaderSection: React.FC = () => {
  return (
    <Container
      maxWidth='md'
      sx={{
        textAlign: 'center',
        my: 10,
        p: 5,
        borderRadius: '6',
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: (theme) =>
          theme.palette.mode === 'light'
            ? '0 8px 24px rgba(0,0,0,0.05)'
            : '0 8px 24px rgba(0,0,0,0.3)',
      }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
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
          <Typography variant='h3' component='h1' gutterBottom>
            Johan Yindou
          </Typography>
          <Typography variant='h5' color='text.secondary' gutterBottom>
            Concepteur Développeur d'Applications Web
          </Typography>
          <Typography variant='body1' sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
            Principales compétences : HTML, CSS, JavaScript, React, Node.js,
            etc.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default HeaderSection;
