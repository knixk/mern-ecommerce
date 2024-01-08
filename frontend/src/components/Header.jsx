import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Header = () => {
  return <header>
    <Navbar bg='dark' variant="dark" expand='lg' collapseOnSelect>
        <Container> 
            <Navbar.Brand href="/">
                <img src={logo} alt="logo" />
                ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ms-auto">
                    <Nav.Link href='/cart'>
                        <FaShoppingCart /> Cart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </header>;
};

export default Header;
