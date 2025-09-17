import React from 'react';
import '../styles/App.css';
import { Container, Box, Typography } from '@mui/material';

const Resume: React.FC = () => {
    return (
        <Container maxWidth="md" >
                    <Box sx={{ my: 8 }}>
                        <Typography variant="h1">Resume</Typography>
                        <Typography variant="body1">En cours de construction</Typography>
                    </Box> 
        </Container>
    );
};

export default Resume;