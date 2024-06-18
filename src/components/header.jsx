import React from 'react';
import '../App.css';
import imgFooter from '../assets/img/footer-medical.png';
const Header = () => {
  return (
    <header className="header-pages">
      <div className="header-left">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
      </div>
      <div className="header-center">
        <img src={imgFooter} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;