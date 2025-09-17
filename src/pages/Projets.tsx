import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';
import { projects } from '../data/projects';

const Projets : React.FC = () => {
    return (
        <Container maxWidth="md" >
            <Box sx={{ my: 8 }}>
                <Typography variant="h1">Projects</Typography>
                <Typography variant="body1">En cours de construction</Typography>
            </Box> 
        </Container>
    );
};

export default Projets