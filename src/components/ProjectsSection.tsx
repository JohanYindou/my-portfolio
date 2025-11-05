import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

/* 
--- 
Faut que j'upgrade la qualité des grids
---
*/

const ProjectsSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        py: 10,
      }}>
      <Container maxWidth='lg' sx={{ my: 8 }}>
        <Typography
          variant='h4'
          component='h2'
          sx={{ textAlign: 'center', mb: 4 }}>
          Derniers Projets
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project) => (
            <Grid key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 12px 24px rgba(0,0,0,0.1)'
                          : '0 12px 24px rgba(0,0,0,0.5)',
                    },
                  }}>
                  <CardMedia
                    component='img'
                    height='200'
                    image={project.image}
                    alt={`Screenshot du projet ${project.name}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h3'>
                      {project.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Technologies : {project.technologies.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
