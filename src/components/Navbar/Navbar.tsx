import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        </li>
        <li>
          <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        </li>
        <li>
          <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
