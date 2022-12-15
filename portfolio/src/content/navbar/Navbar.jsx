import Nav from 'react-bootstrap/Nav';

import portfolioImg from '../../images/portfolio_image_1.jpg'
import './navbar.css'

function NavbarContainer() {
  return (
    <Nav variant='secondary' defaultActiveKey="/home" className="navbar__container">
      <div className='navbar__content'>
        <img className='navbar__image' src={portfolioImg} alt='portfolio' />
        <div className='navbar__links'>
          <Nav.Link className='navbar__link' href="#home">Home</Nav.Link>
          <Nav.Link className='navbar__link' href="#projects">Projects</Nav.Link>
          <Nav.Link className='navbar__link' href="#about">About</Nav.Link>
          <Nav.Link className='navbar__link' href="#contact">Contact</Nav.Link>
        </div>
      </div>
    </Nav>
  );
}

export default NavbarContainer;