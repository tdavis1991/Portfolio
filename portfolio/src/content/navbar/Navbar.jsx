// import React from 'react';
// import './navbar.css';

// const Navbar = () => {
//   return (
//     <div className='navbar__container'>
//       <div className='navbar__logo'>
//         <h1>LOGO</h1>
//       </div>
//       <div className='navbar__links'>
//         <a>Home</a>
//         <a>Projects</a>
//         <a>About</a>
//         <a>Contact</a>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navbar.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbar__container' fixed='top' bg="secondary" variant="light">
        <Container className='navbar__content'>
          <Navbar.Brand className='navbar__brand' href="#home">Portfolio</Navbar.Brand>
          <Nav fill variant='tabs'>
            <Nav.Item>
              <Nav.Link className='navbar__link' href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='navbar__link' href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='navbar__link' href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='navbar__link' href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;