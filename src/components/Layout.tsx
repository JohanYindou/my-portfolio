// src/components/Layout.tsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Navbar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
