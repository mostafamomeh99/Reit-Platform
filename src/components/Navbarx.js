import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import logo from '../imgs/Capture.png'
import { NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarx() {
  return (
    <Navbar expand="lg" className="bg-dark" sticky="top">
      <Container>
        <Navbar.Brand ><NavLink to='/'><img src={logo} alt="" /></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
           <Nav.Link as={NavLink} to="/" className=' nav-link' id='x2' >
            Home</Nav.Link>
           <Nav.Link as={NavLink} to="/about" className='nav-link' id='x2' >
            About</Nav.Link>
            <Nav.Link  as={NavLink} to="/rules" className='nav-link' id='x2' >
            Rules</Nav.Link>
            <Nav.Link  as={NavLink} to="/login" className='nav-link' id='x2' >
            Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  Navbarx;