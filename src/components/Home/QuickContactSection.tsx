// src/components/QuickContactSection.tsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const QuickContactSection: React.FC = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        textAlign: 'center',
        py: 10,
        px: 2,
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #f9fafb, #fff)'
            : 'linear-gradient(180deg, #0f172a, #1e293b)',
      }}>
      <Container maxWidth='sm'>
        <Typography variant='h4' fontWeight='bold' sx={{ mb: 2 }}>
          Une idée ou un projet ?
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
          Je suis toujours ouvert à de nouvelles collaborations. N’hésitez pas à
          me contacter !
        </Typography>
        <Button variant='outlined' color='primary' size='large' href='/contact'>
          Me contacter
        </Button>
      </Container>
    </Box>
  );
};

export default QuickContactSection;
