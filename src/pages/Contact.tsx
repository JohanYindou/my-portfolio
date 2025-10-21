import React, { useState } from 'react';
import '../styles/App.css';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';


const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [nature, setNature] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    setError(''); // réinitialise l’erreur
    let subject = '';

    // 🔹 Génère un objet adapté selon la nature
    switch (nature) {
      case 'Collaboration':
        subject = `Demande de collaboration de la part de ${name}`;
        break;
      case 'Projet':
        subject = `Proposition de projet de la part de ${name}`;
        break;
      case "Demande d'information":
        subject = `Demande d'information de la part de ${name}`;
        break;
      case 'Autre':
        subject = `Message de la part de ${name}`;
        break;
      default:
        subject = `Message de ${name}`;
        break;
    }

    // crée le lien mailto
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);

    window.location.href = `mailto:jyindou@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };
  return (
    <Container maxWidth='sm' sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Box textAlign='center' mb={4}>
          <Typography variant='h4' fontWeight={700} gutterBottom>
            Contactez-moi
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Sélectionnez la nature du message et rédigez votre texte ci-dessous.
          </Typography>
        </Box>

        <Box
          component='form'
          onSubmit={handleSubmit}
          display='flex'
          flexDirection='column'
          gap={3}>
          <TextField
            label='Nom'
            variant='outlined'
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label='Nature du message'
            select
            fullWidth
            required
            value={nature}
            onChange={(e) => setNature(e.target.value)}>
            <MenuItem value='Collaboration'>Collaboration</MenuItem>
            <MenuItem value='Projet'>Projet</MenuItem>
            <MenuItem value="Demande d'information">
              Demande d'information
            </MenuItem>
            <MenuItem value='Autre'>Autre</MenuItem>
          </TextField>
          <TextField
            label='Email'
            type='email'
            variant='outlined'
            fullWidth
            required
            error={!!error}
            helperText={error}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='Message'
            multiline
            rows={4}
            variant='outlined'
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
              sx={{ borderRadius: 3, py: 1.5 }}>
              Envoyer
            </Button>
          </motion.div>

          {submitted && (
            <Alert severity='success' sx={{ mt: 2 }}>
              Votre client e-mail va s’ouvrir...
            </Alert>
          )}
        </Box>
        <Box textAlign='center' mt={5}>
          <Typography variant='body1' color='text.secondary'>
            Vous pouvez aussi me contacter directement :
          </Typography>
          <Typography variant='h6' fontWeight={600} sx={{ mt: 1 }}>
            📞{' '}
            <a
              href='tel:+33627571890'
              style={{ textDecoration: 'none', color: 'inherit' }}>
              +33 6 27 57 18 90
            </a>
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;