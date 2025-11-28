// src/components/HeroSection.tsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        textAlign: 'center',
        py: { xs: 8, md: 12, lg: 16 },
        px: 2,
      }}>
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          fontWeight='bold'
          sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
          Salut, je suis{' '}
          <Box component='span' color='primary.main'>
            Johan Yindou
          </Box>
        </Typography>
        <Typography variant='h5' color='text.secondary' sx={{ mb: 4 }}>
          Développeur Web passionné — je conçois des applications modernes,
          performantes et intuitives.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          size='large'
          href='/projets'>
          Voir mes projets
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
