import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ColorModeContext } from '../context/ThemeContext'; // Ajustez le chemin si nécessaire

const Navbar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
          }}>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Projets</Button>
          <Button color='inherit'>Resume</Button>
          <Button color='inherit'>Contact</Button>
        </Box>
        <IconButton onClick={toggleColorMode} color='inherit'>
          {/* Affiche l'icône appropriée en fonction du thème actuel */}
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
