// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={(theme) => ({
        py: 3,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[50] 
            : theme.palette.background.default, 
        color:
          theme.palette.mode === 'light'
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
        borderTop: `1px solid ${
          theme.palette.mode === 'light'
            ? theme.palette.primary.main + '20' 
            : 'rgba(255,255,255,0.08)'
        }`,
      })}>
      <Container maxWidth='lg'>
        <Typography variant='body2'>
          © {new Date().getFullYear()} Yindou Johan — Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
