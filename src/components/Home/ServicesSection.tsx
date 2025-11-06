// src/components/ServicesSection.tsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { services } from '../../data/services';


const ServicesSection: React.FC = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        py: 10,
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #f9fafb, #fff)'
            : 'linear-gradient(180deg, #0f172a, #1e293b)',
      }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          textAlign='center'
          fontWeight='bold'
          sx={{ mb: 6 }}>
          Ce que je fais
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent='center'
          alignItems='stretch'
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 6, // espace entre les cartes (px)
          }}>
          {services.map((service, i) => (
            <Card
              key={service.id}
              component={motion.div}
              whileHover={{ y: -6 }}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: 'all 0.3s ease',
              }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant='h6' fontWeight='bold' gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
