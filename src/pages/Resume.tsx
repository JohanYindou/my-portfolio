import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import '../styles/App.css';

const Resume: React.FC = () => {
  const [selectedCV, setSelectedCV] = useState('fullstack');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newCV: string | null
  ) => {
    if (newCV !== null) setSelectedCV(newCV);
  };

  const cvFiles: Record<string, string> = {
    fullstack: '/cv_johan_yindou_fullstack.pdf',
    vendeur: '/cv_johan_yindou_vendeur.pdf',
  };

  return (
    <Container
      maxWidth='md'
      sx={{ my: 10, position: 'relative', overflow: 'hidden' }}>
      {/* === Fond animé (calque en dessous) === */}
      <motion.div
        className='gradient-background-neutral'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* === Contenu principal (calque au-dessus) === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='h3'
            fontWeight='bold'
            component='h1'
            gutterBottom>
            Mon CV
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Sélectionnez le type de CV à afficher
          </Typography>
        </Box>

        {/* Sélecteur de type de CV */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ToggleButtonGroup
            color='primary'
            value={selectedCV}
            exclusive
            onChange={handleChange}
            sx={{ borderRadius: 4 }}>
            <ToggleButton value='fullstack'>Fullstack</ToggleButton>
            <ToggleButton value='vendeur'>Vendeur</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Aperçu du CV */}
        <motion.div
          key={selectedCV}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <Card sx={{ boxShadow: 6, borderRadius: 4, overflow: 'hidden' }}>
            <CardContent sx={{ p: 0 }}>
              <Box
                component='iframe'
                src={cvFiles[selectedCV]}
                title={`CV ${selectedCV}`}
                sx={{
                  width: '100%',
                  height: '80vh',
                  border: 'none',
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Resume;
