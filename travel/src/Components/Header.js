import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button , NavDropdown,Col ,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import { FaShoppingBasket, FaUser } from 'react-icons/fa';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
  

function Header() {

    const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleString("en-IN", options);
  };
  return (
    <>
<div style={{ backgroundColor: "#000", color: "#fff", padding: "10px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <span style={{ fontSize: "16px", fontWeight: "500", display: "block" }}>
              Contact: 18001027408
            </span>
            <span style={{ fontSize: "14px", fontWeight: "400" }}>
              {formatDate(dateTime)}
            </span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              <FaLinkedinIn />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="header-wrapper shadow-sm">
    {/* Top row: Logo center, Icons on right */}
    <div className="top-row ">
      <Container>
        <div className="d-flex justify-content-between align-items-center" >
          {/* Left spacer for alignment */}
          <div style={{ width: '80px' }}></div>
  
          {/* Centered Logo */}
          <div className="text-center">
            <img
              src="https://anttravels.com/images/logo.png"
              alt="logo"
              width={80}
            />
          </div>
  
          {/* Right side: dropdown + icons */}
          <div className="d-flex align-items-center gap-3">
            <NavDropdown title="EUR" id="currency-dropdown">
              <NavDropdown.Item>USD</NavDropdown.Item>
              <NavDropdown.Item>INR</NavDropdown.Item>
            </NavDropdown>
            <Button variant="light" className="rounded-circle shadow-sm p-2">
              <FaShoppingBasket />
            </Button>
            <Button variant="light" className="rounded-circle shadow-sm p-2">
              <FaUser />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  
    {/* Navigation row: centered nav items */}
    <div className="">
      <Container>
        <Nav className="d-flex justify-content-center flex-wrap gap-3">
          {[
            'Home', 'Bus Ticket', 'Bus Hire', 'Car Hire',
            'Traveller Hire', 'Gallery', 'Online payment', 'Send Enquiry','Contact Us'
          ].map((item, idx) => (
            <Nav.Link key={idx} href="#" className="nav-link-item fw-medium">
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </div>
  </div>
  </>
  
  
  );
}

export default Header;
