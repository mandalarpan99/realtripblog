import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

export const Navigation = ()=> {
  const navname = 'RealTrip'
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (<>
    <Navbar expand="lg" className={`${isScrolled ? "nav-body-scroll" : "nav-body "}`} >
      <Container className='navbar-body'>
        <Navbar.Brand href="#home" id='home'>
          <div>
              <img
              src="/photos/realTrip_logo_trans2.png"
              width="55"
              height="55"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>
          <div className='nav-brand-name'>
            <h4>Real Trip</h4>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Packages</Nav.Link>
            <Nav.Link href="#skill">About Us</Nav.Link>
            <Nav.Link href="#project">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
  
}
