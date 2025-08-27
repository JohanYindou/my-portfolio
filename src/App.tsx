import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // <-- Ajoutez cette ligne
import { CssBaseline } from '@mui/material';
import { ThemeProviderWrapper } from './context/ThemeContext.tsx';
import Home from './pages/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProviderWrapper>
    <CssBaseline />
    <StrictMode>
      <Home />
    </StrictMode>
  </ThemeProviderWrapper>
);
