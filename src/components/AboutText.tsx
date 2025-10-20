import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const AboutText: React.FC = () => {
  return (
    <Box>
      <Typography variant='h5' fontWeight='bold' gutterBottom>
        Get to know me!
      </Typography>

      <Typography>
        Je m’appelle <b>Johan Yindou</b>. Après un{' '}
        <b>BTS en informatique et réseaux</b>, j’ai poursuivi ma formation avec
        un{' '}
        <b>
          titre RNCP niveau 6 en Conception et Développement d’Applications.
        </b>
        <br />
        <br />
        Ces expériences m’ont permis de maîtriser la conception et le
        développement d’applications web, en particulier avec le{' '}
        <b>stack MERN (MongoDB, Express, React, Node.js)</b>.
      </Typography>

      <Typography>
        <br />
        J’ai également eu l’occasion de mettre en pratique mes compétences lors
        d’un
        <b> stage en développement WordPress</b>, où j’ai travaillé sur la
        création de sites et l’optimisation de l’expérience utilisateur.
      </Typography>

      <Typography>
        <br />
        Aujourd’hui, je mets à profit mes connaissances techniques et mon sens
        de l’organisation pour concevoir des solutions fiables, sécurisées et
        adaptées aux besoins des projets sur lesquels je collabore.
      </Typography>

      <Typography>
        <br />
        Je suis ouvert à de nouvelles <b>opportunités professionnelles</b> où je
        peux contribuer, apprendre et évoluer. Si mon profil correspond à vos
        besoins, n’hésitez pas à{' '}
        <Link href='/contact' underline='hover'>
          me contacter
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default AboutText;