// src/components/Navbar.tsx
import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import { LightMode, DarkMode, Menu as MenuIcon } from '@mui/icons-material';
import { ColorModeContext } from '../context/ThemeContext';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projets', path: '/projets' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  {
    icon: <FaInstagram size={20} />,
    href: 'https://www.instagram.com/johandlag/',
  },
  {
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/JohanYindou/',
  },
  { icon: <FaGithub size={20} />, href: 'https://github.com/JohanYindou' },
];

const Navbar: React.FC = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const commonIconColor =
    mode === 'light' ? theme.palette.grey[800] : theme.palette.grey[200];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        width: 250,
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}>
      <Typography
        variant='h6'
        sx={{
          my: 3,
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          letterSpacing: 1.5,
        }}>
        Johan Yindou
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'>
            <IconButton
              sx={{
                color: commonIconColor,
                '&:hover': { color: theme.palette.primary.main },
              }}>
              {link.icon}
            </IconButton>
          </a>
        ))}
        <IconButton
          onClick={toggleColorMode}
          sx={{
            color: commonIconColor,
            '&:hover': { color: theme.palette.primary.main },
          }}>
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.background.paper
            : theme.palette.background.default,
        backdropFilter: 'blur(12px)',
        border: 'none',
        borderRadius: 0,
      }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
          minHeight: 70,
        }}>
        <Typography
          variant='h6'
          onClick={() => navigate('/')}
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1.5,
            fontFamily: 'Montserrat, sans-serif',
            color: 'primary.main',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}>
          Johan Yindou
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              sx={{
                color: commonIconColor,
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { color: theme.palette.primary.main },
              }}>
              {item.name}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1,
          }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'>
              <IconButton
                sx={{
                  color: commonIconColor,
                  '&:hover': { color: theme.palette.primary.main },
                }}>
                {link.icon}
              </IconButton>
            </a>
          ))}
          <IconButton
            onClick={toggleColorMode}
            sx={{
              color: commonIconColor,
              '&:hover': { color: theme.palette.primary.main },
            }}>
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>

        <IconButton
          color='inherit'
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 0,
          },
        }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
