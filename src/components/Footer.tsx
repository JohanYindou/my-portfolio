import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        borderTop: (theme) =>
          `1px solid ${
            theme.palette.mode === 'light'
              ? 'rgba(0,0,0,0.08)'
              : 'rgba(255,255,255,0.1)'
          }`,
      }}>
      <Container maxWidth='lg'>
        <Typography variant='body2' color='text.secondary'>
          © {new Date().getFullYear()} Yindou Johan. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
