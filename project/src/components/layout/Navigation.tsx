import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-axa-blue font-semibold" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link to="/" className={`transition-colors ${isActive('/')}`}>
        Accueil
      </Link>
      <Link to="/pilier3a" className={`transition-colors ${isActive('/pilier3a')}`}>
        3ème Pilier A
      </Link>
      <Link to="/pilier3b" className={`transition-colors ${isActive('/pilier3b')}`}>
        3ème Pilier B
      </Link>
      <Link to="/fiscalite" className={`transition-colors ${isActive('/fiscalite')}`}>
        Fiscalité GE
      </Link>
      <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>
        Contact
      </Link>
    </nav>
  );
}