import React, { useEffect } from 'react';
import logo from '../assets/Logo.svg';
import basket from '../assets/Basket.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/css/custom.css';
import '../assets/css/responsive.css';
import '../assets/css/bootstrap.min.css';

const Header = (props) => {
  
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navBar.classList.add('navbar-scroll');
      } else {
        navBar.classList.remove('navbar-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <title>{props.title}</title>
      <section id="header">
        <Navbar role="region" className="navbar" collapseOnSelect fixed="top" expand="lg" variant="dark" style={{ backgroundColor:"#ffffff"}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor:"#495E57"}} />
              <Navbar.Brand className="px-5" href="/">
                  <img className="logoImg" src={logo} alt="logo"/>
              </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center"></Nav>
                <Nav>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    onClick={handleClick("/")}
                    to="/">
                    Home
                  </NavLink>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    onClick={handleClick("about")}
                    to="/#about">
                    About
                  </NavLink>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    onClick={handleClick("menu")}
                    to="/#menu">
                    Menu
                  </NavLink>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    to="/not-found">
                    Reservations
                  </NavLink>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    to="/booking-page">
                    Order Online
                  </NavLink>
                  <NavLink className="navItem text-uppercase px-3" 
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#495E57" : "#000000",
                      };
                    }}
                    to="/not-found">
                    Login
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand href="/">
                <img src={basket} alt="cart" />
              </Navbar.Brand>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
