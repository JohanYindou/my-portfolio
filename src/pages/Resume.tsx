import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import '../styles/App.css';

const Resume: React.FC = () => {
  const theme = useTheme();
  const cvFile = '/cv_johan_yindou_fullstack.pdf#toolbar=0&navpanes=0&scrollbar=0';

  return (
    <Container
      maxWidth="md"
      sx={{ my: 10, position: 'relative', overflow: 'hidden' }}
    >
      {/* Fond animé */}
      <motion.div
        className="gradient-background-neutral"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            component="h1"
            gutterBottom
          >
            Mon CV
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Découvrez mon parcours et mes compétences techniques
          </Typography>
        </Box>

        {/* Card du CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              borderRadius: 1.5,
              overflow: 'hidden',
              p: 0,
              background: theme.palette.mode === 'light' ? '#f7faff' : '#1a1a1a',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            {/* Barre d’en-tête */}
            <Box
              sx={{
                background:
                  theme.palette.mode === 'light'
                    ? '#ffffffcc'
                    : '#111111cc',
                backdropFilter: 'blur(8px)',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom:
                  theme.palette.mode === 'light'
                    ? '1px solid #ddd'
                    : '1px solid #222',
              }}
            >
              <Typography fontWeight="bold" variant="subtitle1">
                CV Johan Yindou
              </Typography>
              <Button
                variant="contained"
                size="small"
                startIcon={<Download />}
                href={cvFile}
                download
              >
                Télécharger
              </Button>
            </Box>

            {/* Iframe du CV */}
            <CardContent sx={{ p: 0 }}>
              <Box
                component="iframe"
                src={cvFile}
                title="CV Fullstack"
                sx={{
                  width: '100%',
                  height: '80vh',
                  border: 'none',
                  borderLeft:
                    theme.palette.mode === 'light'
                      ? '1px solid #e0e0e0'
                      : '1px solid #333',
                  borderRight:
                    theme.palette.mode === 'light'
                      ? '1px solid #e0e0e0'
                      : '1px solid #333',
                  borderBottom:
                    theme.palette.mode === 'light'
                      ? '1px solid #e0e0e0'
                      : '1px solid #333',
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
