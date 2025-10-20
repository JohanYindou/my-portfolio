import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import AboutText from '../components/AboutText';
import SkillsList from '../components/SkillsList';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      {/* En-tête */}
      <Box sx={{ my: 8 }}>
        <Typography variant='h3' align='center' fontWeight='bold' gutterBottom>
          About Me
        </Typography>
        <Typography
          align='center'
          sx={{ maxWidth: 700, mx: 'auto', mb: 6, color: 'text.secondary' }}>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </Typography>
      </Box>

      {/* Section à deux colonnes horizontales */}
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // Stack en mobile, côte à côte sur desktop
          gap: 4,
          alignItems: 'stretch',
          mb: 6,
        }}>
        {/* Bloc gauche : AboutText */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ height: '100%' }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              height: '100%',
            }}>
            <AboutText />
          </Paper>
        </motion.div>

        {/* Bloc droit : SkillsList */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ height: '100%' }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              height: '100%',
            }}>
            <SkillsList />
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
