import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../styles/App.css';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Portfolio React',
    description:
      'Site personnel moderne développé avec React, MUI et Framer Motion.',
    image: 'https://placehold.co/600x400/png',
    technologies: ['React', 'TypeScript', 'MUI', 'Framer Motion'],
    date: '2025',
    link: 'https://exemple.com/portfolio',
  },
  {
    id: 2,
    name: 'Application E-commerce',
    description:
      'Application de vente en ligne avec gestion du panier et espace admin.',
    image: 'https://placehold.co/600x400/png',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    date: '2024',
    link: 'https://exemple.com/ecommerce',
  },
  {
    id: 3,
    name: 'Dashboard Analytics',
    description: 'Dashboard de visualisation de données en temps réel.',
    image: 'https://placehold.co/600x400/png',
    technologies: ['React', 'Recharts', 'Firebase'],
    date: '2023',
    link: 'https://exemple.com/dashboard',
  },
  {
    id: 4,
    name: 'Application Mobile',
    description: 'Application mobile hybride avec React Native et Expo.',
    image: 'https://placehold.co/600x400/png',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    date: '2022',
    link: 'https://exemple.com/mobileapp',
  },
];

const Projets: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleConfirmRedirect = () => {
    if (selectedProject) {
      window.open(selectedProject.link, '_blank');
    }
    handleClose();
  };

  return (
    <Container maxWidth='lg' sx={{ my: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant='h3' component='h1' fontWeight='bold' gutterBottom>
          Mes Projets
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          Découvrez mes réalisations techniques et créatives
        </Typography>
      </Box>

      {/* === Grille 2 par 2 === */}
      <Grid
        container
        spacing={4}
        justifyContent='center'
        alignItems='stretch'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 6 , // espace entre les cartes (px)
        }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}>
            <Card
              sx={{
                height: 480,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 6,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 10,
                },
              }}>
              <CardMedia
                component='img'
                height='200'
                image={project.image}
                alt={`Aperçu du projet ${project.name}`}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant='h5' fontWeight='bold' gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant='body2' color='text.secondary' gutterBottom>
                  {project.description}
                </Typography>
                <Typography variant='body2' sx={{ mt: 1 }}>
                  <strong>Technologies :</strong>{' '}
                  {project.technologies.join(', ')}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Date : {project.date}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', pb: 2 }}>
                <Button
                  variant='contained'
                  color='primary'
                  endIcon={<OpenInNewIcon />}
                  onClick={() => handleOpen(project)}>
                  Voir le projet
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Grid>

      {/* === Pop-up de confirmation === */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ouvrir le projet ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous allez être redirigé vers :
            <br />
            <strong>{selectedProject?.name}</strong>
            <br />
            Voulez-vous continuer ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            Annuler
          </Button>
          <Button onClick={handleConfirmRedirect} color='primary' autoFocus>
            Oui, ouvrir
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Projets;
