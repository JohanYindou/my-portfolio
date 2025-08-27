import { createContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

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

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // Vous pouvez personnaliser d'autres couleurs ici si nécessaire
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};