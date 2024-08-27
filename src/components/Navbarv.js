import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import logo from '../imgs/Capture.png'
import { NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react";
import { counerx } from './State';
function Navbarv(props){
  let {count}=useContext(counerx)
  console.log(count)
  let x=<>{props.user}<i className="fa-regular fa-user"></i> </>
return(
    <>
<Navbar expand="lg" className="bg-dark" sticky="top">
<Container>
<Navbar.Brand ><NavLink to='/'><img src={logo} alt="" /></NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-4">
      <Nav.Link as={NavLink} to="/" className=' nav-link' id='x2' >
            Home</Nav.Link>
           <Nav.Link as={NavLink} to="/about" className='nav-link' id='x2' >
            About</Nav.Link>
            <Nav.Link  as={NavLink} to="/rules" className='nav-link' id='x2' >
            Rules</Nav.Link>

            <Nav.Link  as={NavLink} to="/invests" className='nav-link  position-relative' id='x2' >
          <i className="fa-solid fa-sack-dollar me-2"></i>
          My investments
          <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
    {count}  
  </span> </Nav.Link>
           

  <NavDropdown title={x} id="basic-nav-dropdown" className='ms-3'>
              <NavDropdown.Item id="x200" onClick={()=>{props.logout(false)}} >Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
)
}

export default Navbarv