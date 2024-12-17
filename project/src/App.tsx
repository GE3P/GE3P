import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Pilier3aPage from './pages/Pilier3aPage';
import Pilier3bPage from './pages/Pilier3bPage';
import FiscalitePage from './pages/FiscalitePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white font-space text-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pilier3a" element={<Pilier3aPage />} />
            <Route path="/pilier3b" element={<Pilier3bPage />} />
            <Route path="/fiscalite" element={<FiscalitePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}