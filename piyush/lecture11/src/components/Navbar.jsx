import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbBar = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bookify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link >
                <Link className="text-white " to={"/addBooks"}>Add Listing</Link>
            </Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </>
  )
}

export default NavbBar
