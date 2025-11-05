import { createContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import {responsiveFontSizes} from '@mui/material'
import type { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// Définition du contexte avec la fonction et le mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light' as PaletteMode, // Ajout de la propriété mode
});

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode
    }),
    [mode]
  );

 const theme = useMemo(() => {
   let newTheme = createTheme({
     palette: {
       mode,
       primary: { main: '#1976d2' },
       secondary: { main: '#00BFA6' },
       background: {
         default: mode === 'light' ? '#f9fafb' : '#121212',
         paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
       },
       text: {
         primary: mode === 'light' ? '#1a1a1a' : '#f5f5f5',
         secondary: mode === 'light' ? '#555' : '#b0b0b0',
       },
     },
     typography: {
       fontFamily: `'Poppins', system-ui, sans-serif`,
       h1: { fontWeight: 700 },
       h2: { fontWeight: 600 },
       h3: { fontWeight: 600 },
       h4: { fontWeight: 500 },
       button: {
         textTransform: 'none',
         fontWeight: 600,
         borderRadius: 12,
       },
     },
     shape: { borderRadius: 12 },
     components: {
       MuiOutlinedInput: {
         styleOverrides: {
           root: ({ theme }) => ({
             backgroundColor:
               theme.palette.mode === 'light' ? '#fff' : '#1e293b',
             '& fieldset': {
               borderColor:
                 theme.palette.mode === 'light'
                   ? 'rgba(0,0,0,0.2)'
                   : 'rgba(255,255,255,0.2)',
             },
             '&:hover fieldset': {
               borderColor:
                 theme.palette.mode === 'light'
                   ? theme.palette.primary.main
                   : '#60a5fa',
             },
             '&.Mui-focused fieldset': {
               borderColor: theme.palette.primary.main,
               borderWidth: 2,
             },
           }),
         },
       },
       MuiCssBaseline: {
         styleOverrides: (themeParam) => ({
           body: {
             backgroundColor: themeParam.palette.background.default,
             color: themeParam.palette.text.primary,
             transition: 'background-color 0.3s ease, color 0.3s ease',
           },
         }),
       },
       MuiButton: {
         styleOverrides: {
           root: {
             borderRadius: 12,
             padding: '8px 20px',
           },
         },
       },
       MuiPaper: {
         styleOverrides: {
           root: {
             borderRadius: 16,
             transition: 'box-shadow 0.3s ease',
           },
         },
       },
     },
   });

   return responsiveFontSizes(newTheme);
 }, [mode]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};