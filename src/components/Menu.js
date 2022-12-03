import {Nav, Navbar} from 'react-bootstrap';
import logo from '../images/logo.gif';

function Menu() {
    return (
        <Navbar>
            <div className="container-fluid">
                <Navbar.Brand><img src={logo} alt="" width="70"/></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Menu;