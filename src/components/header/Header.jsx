import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='menu-container-back'>
    <div className="menu-container">
      <div className="menuDiv">
        <Link to="/" activeclassname="active" className='menu'>Home</Link>
        <Link to="/about" activeclassname="active" className='menu'>About us</Link>
        <div className="dropdown">
          <Link to="#" onClick={() => setIsOpen(!isOpen)} className='menu'>Categories</Link>
          <span className={`arrowDown ${isOpen && 'active'}`}>🢗</span>
            <div className={`dropdown-content ${isOpen && 'active'}`} style={{ position: 'absolute' }} onClick={() => setIsOpen(!isOpen)}>
              <Link to="/categories/sweetstuff" activeclassname="active" className='menu'>Sweetstuff</Link>
              <Link to="/categories/dried-fruits" activeclassname="active" className='menu'>Dried Fruits</Link>
              <Link to="/categories/cookies" activeclassname="active" className='menu'>Cookies</Link>
              <Link to="/categories/oreshki" activeclassname="active" className='menu'>Oreshki</Link>
            </div>
        </div>
        <Link to="/contact" activeclassname="active" className='menu'>Contact</Link>
      </div>
      <img src={logo} alt='logo'/>
    </div>
    </div>
  );
};

export default Header;