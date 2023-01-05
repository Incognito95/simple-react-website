import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

function Menu() {

    return (
       <div id="nav">
           <Navbar>
               <div className="container-fluid" id="menu">
                   <Navbar.Brand><a href="/"><img src={logo} alt="" width="70"/></a></Navbar.Brand>
                   <Navbar.Collapse className="justify-content-end">
                       <Navbar.Text>
                           <Nav className="me-auto">
                               <Nav.Link href="/">Home</Nav.Link>
                               <Nav.Link href="/about">About</Nav.Link>
                               <Nav.Link href="/cases">Cases</Nav.Link>
                               <Nav.Link href="/contact">Contact</Nav.Link>
                           </Nav>
                       </Navbar.Text>
                   </Navbar.Collapse>
               </div>
           </Navbar>
       </div>
    );
}

export default Menu;