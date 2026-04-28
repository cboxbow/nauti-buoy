import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { LanguageProvider } from '@/context/LanguageContext';
import Home from '@/pages/home/index';
import Excursions from '@/pages/excursions/index';
import Galerie from '@/pages/galerie/index';
import Programme from '@/pages/programme/index';
import Tarifs from '@/pages/tarifs/index';
import Contact from '@/pages/contact/index';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
