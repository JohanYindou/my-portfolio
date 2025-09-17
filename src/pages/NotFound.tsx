import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Snackbar } from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant='h4' color='error'>
        Page non trouvée
      </Typography>
      <Typography variant='body1' sx={{ mt: 2 }}>
        Vous allez être redirigé vers la page d'accueil...
      </Typography>
      <Snackbar
        open={true}
        message="Page introuvable. Redirection vers l'accueil..."
      />
    </Box>
  );
};

export default NotFound;
