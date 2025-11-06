// src/components/Home/ProjectsBlock.tsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const ProjectsBlock: React.FC = () => {
  return (
    <Box
      sx={{
        py: 4,
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #fff, #f9fafb)'
            : 'linear-gradient(180deg, #1e293b, #0f172a)',
      }}>
      <Container maxWidth='lg'>
        <Box>
          <Container maxWidth='lg' sx={{ my: 4 }}>
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
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true }}>
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
      </Container>
    </Box>
  );
};

export default ProjectsBlock;
