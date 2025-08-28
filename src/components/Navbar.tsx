import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Typography } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ColorModeContext } from '../context/ThemeContext'; // Ajustez le chemin si nécessaire

const Navbar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Partie gauche : Nom */}
        <Typography
          variant='h6'
          component='h1'
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1.5,
            fontFamily: 'Montserrat, sans-serif',
            color: 'primary.main',
            textTransform: 'uppercase',
            cursor: 'default',
          }}>
          Johan Yindou
        </Typography>

        {/* Partie centrale : Navigation */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Projets</Button>
          <Button color='inherit'>Resume</Button>
          <Button color='inherit'>Contact</Button>
        </Box>

        {/* Partie droite : Bouton mode sombre */}
        <IconButton onClick={toggleColorMode} color='inherit'>
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
