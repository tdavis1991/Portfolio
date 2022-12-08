// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import './navbar.css';

// function NavbarContainer() {
//   return (
//     <>
//       <Navbar className='navbar__container' fixed='left' bg="secondary" variant="light">
//         <Container className='navbar__content'>
//           <Navbar.Brand className='navbar__brand' href="#home">Portfolio</Navbar.Brand>
//           <Nav fill variant='tabs'>
//             <Nav.Item>
//               <Nav.Link className='navbar__link' href="#home">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link className='navbar__link' href="#projects">Projects</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link className='navbar__link' href="#about">About</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link className='navbar__link' href="#contact">Contact</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

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