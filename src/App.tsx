import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // <-- Ajoutez cette ligne
import { CssBaseline } from '@mui/material';
import { ThemeProviderWrapper } from './context/ThemeContext.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projets from './pages/Projets.tsx';
import Resume from './pages/Resume.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProviderWrapper>
    <CssBaseline />
    <StrictMode>
      <Router>
        {/* --- A faire 
        Mettre en place un redirection vers Home 
        si l'utlisateur est sur une page qui n'existe pas 
        + Pop Up de page non trouvée, vous avez été redirigé  
        --- */}
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projets' element={<Projets />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
            {/* Page non trouvée */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </StrictMode>
  </ThemeProviderWrapper>
);
