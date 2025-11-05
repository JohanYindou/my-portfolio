import React from 'react';
import { Typography, Chip, Stack, Box, Divider } from '@mui/material';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionChip = motion.create(Chip);

const SkillsList: React.FC = () => {
  return (
    <Box>
      <Typography variant='h5' fontWeight='bold' gutterBottom sx={{ mb: 2 }}>
        My Skills
      </Typography>

      {skills.map((group, index) => (
        <MotionBox
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          sx={{
            mb: 2,
            p: 2,
            borderRadius: 1,
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            backgroundColor: (theme) => theme.palette.background.paper,
            '&:hover': {
              transform: 'translateY(-4px)',
              transition: 'transform 0.3s ease',
            },
          }}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            gutterBottom
            sx={{ mb: 1 }}>
            {group.category}
          </Typography>

          <Stack direction='row' spacing={1} flexWrap='wrap' rowGap={1.5}>
            {group.items.map((skill, i) => (
              <MotionChip
                key={i}
                label={skill}
                sx={{
                  m: 0.25,
                  fontWeight: 500,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#f3f4f6' : '#334155',
                  color: (theme) =>
                    theme.palette.mode === 'light' ? '#111827' : '#f8fafc',
                  cursor: 'pointer',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            ))}
          </Stack>

          {index < skills.length - 1 && <Divider sx={{ mt: 1.5 }} />}
        </MotionBox>
      ))}
    </Box>
  );
};

export default SkillsList;
