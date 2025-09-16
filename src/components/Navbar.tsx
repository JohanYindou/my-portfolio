import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Typography } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ColorModeContext } from '../context/ThemeContext';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';



const Navbar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar
        sx={{
          position: 'relative',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          minHeight: 64,
        }}>
        {/* Partie gauche : Nom */}
        <a href='/' className='logo'>
          <Typography
            variant='h6'
            onClick={() => navigate('/')}
            component='h1'
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1.5,
              fontFamily: 'Montserrat, sans-serif',
              color: 'primary.main',
              textTransform: 'uppercase',
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/');
              }
            }}>
            Johan Yindou
          </Typography>
        </a>

        {/* Partie centrale : Navigation */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 5,
          }}>
          <Button color='inherit' component={Link} to='/about'>About</Button>
          <Button color='inherit' component={Link} to='/projets'>Projets</Button>
          <Button color='inherit' component={Link} to='/resume'>Resume</Button>
          <Button color='inherit' component={Link} to='/contact'>Contact</Button>
        </Box>

        {/* Partie droite : Reseaux sociaux */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            marginLeft: 'auto',
          }}>
          <a
            href='https://www.instagram.com/johandlag/'
            target='_blank'
            rel='noopener noreferrer'>
            <IconButton color='inherit'>
              <FaInstagram size={20} />
            </IconButton>
          </a>

          <a
            href='https://www.linkedin.com/in/JohanYindou/'
            target='_blank'
            rel='noopener noreferrer'>
            <IconButton color='inherit'>
              <FaLinkedin size={20} />
            </IconButton>
          </a>

          <a
            href='https://github.com/JohanYindou'
            target='_blank'
            rel='noopener noreferrer'>
            <IconButton color='inherit' sx={{ marginRight: 6 }}>
              <FaGithub size={20} />
            </IconButton>
          </a>
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
