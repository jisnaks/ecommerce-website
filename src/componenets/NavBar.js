import React from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope, facartshopping } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Products from './Products';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function NavBar() {

  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0 ">
      <Container fluid >
        <Link to="/">
          <Navbar.Brand href="#home ">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top mt-0"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 fs-6  fw-bold "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="me-4" href="/">Home</Nav.Link>
            <Nav.Link className="me-4" href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Link to='/cart'>
            <div style={{ position: 'relative' }} className='cursor-pointer '>
              <FontAwesomeIcon className="fa-2x pe-5 ps-5" icon={faCartShopping} />
              <span style={{ position: 'absolute', top: 0, left: 85 }} className=''>{cartItems.length}</span>
            </div>
          </Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
