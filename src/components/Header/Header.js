import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <header className='container'>
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='' className='img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto d-block'>
            <a href='#home' className='active'>
              Home
            </a>
            <a href='#about'>About</a>
            <a href='#service'>Service</a>
            <a href='#pricing'>Pricing</a>
            <a href='#team'>Our Team</a>
            <button className='contactBtn'>Contact Us</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
