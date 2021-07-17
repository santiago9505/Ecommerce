import React, { children } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/components/Layout.css';

const Lyout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Lyout;
