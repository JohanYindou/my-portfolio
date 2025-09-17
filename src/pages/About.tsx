import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';


const About: React.FC = () => {
    return (
        <Container maxWidth="md" >
            <Box sx={{ my: 8 }}>
                <Typography variant="h1">About</Typography>
                <Typography variant="body1">En cours de construction</Typography>
            </Box>
            {/* 
                Mettre en place une presentation de moi ici avec
                mes infos personnelles et mes competences techniques 
                mes objectifs professionnelles.
            */}
      </Container>
    );
};

export default About;