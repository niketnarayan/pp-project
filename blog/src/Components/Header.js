import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <div>
      {/* Top Row: Logo + Search */}
      <div className="bg-white border-bottom py-2">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <img
                src="https://rajtech.info/mycmoofi/2022/12/dark-low01.png" // Replace with your logo path
                height="50"
                alt="RajTech Logo"
              />
            </Col>
            <Col xs={12} md={6}>
              <Form className="d-flex justify-content-end mt-2 mt-md-0">
                <FormControl
                  type="search"
                  placeholder="Search ..."
                  className="me-2"
                  style={{ maxWidth: '400px' }}
                />
                <Button variant="danger"><i className="bi bi-search"></i></Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Row: Navigation Bar */}
      <Navbar expand="lg" className="py-0" style={{ background: 'linear-gradient(to bottom, #d70000, #a80000)' }}>
        <Container fluid>
          <Navbar.Toggle aria-controls="rajtech-navbar" className="bg-light" />
          <Navbar.Collapse id="rajtech-navbar">
            <Nav className="mx-auto fw-bold text-white" style={{fontSize:"20px"}}>
              <Nav.Link href="#home" className="text-white">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <NavDropdown title="How 2" className="custom-dropdown">
                <NavDropdown.Item href="#how1">Apple</NavDropdown.Item>
                <NavDropdown.Item href="#how2">Gaming</NavDropdown.Item>
                <NavDropdown.Item href="#how2">Make Money</NavDropdown.Item>
                <NavDropdown.Item href="#how2">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#how2">Social Media</NavDropdown.Item>
                <NavDropdown.Item href="#how2">Tips $ Triks</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tech News" className="custom-dropdown">
                <NavDropdown.Item href="#news">Apps</NavDropdown.Item>
                <NavDropdown.Item href="#news">Internet</NavDropdown.Item>
                <NavDropdown.Item href="#news">Mobiles</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blogging" className="custom-dropdown">
              <NavDropdown.Item href="#news">CMS</NavDropdown.Item>
              <NavDropdown.Item href="#news">E-commerce</NavDropdown.Item>
              <NavDropdown.Item href="#news">Hosting</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Vlogging" className="custom-dropdown">
                <NavDropdown.Item href="#vlog">Daily Motion</NavDropdown.Item>
                <NavDropdown.Item href="#vlog">Face Book</NavDropdown.Item>
                <NavDropdown.Item href="#vlog">Insta Gream</NavDropdown.Item>
                <NavDropdown.Item href="#vlog">Vimeo</NavDropdown.Item>
                <NavDropdown.Item href="#vlog">You Tude</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Ideas" className="custom-dropdown">
                <NavDropdown.Item href="#idea"> Small Business</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Inventions" className="custom-dropdown">
              <NavDropdown.Item href="#vlog">World of Acient</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Rome of Revolution</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Beginning industail Age</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Empires Time</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Birth of New Modren Age</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">War and Peace</NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Coming Globle <i class=" fa-golf-ball "></i></NavDropdown.Item>
              <NavDropdown.Item href="#vlog">Internet Time</NavDropdown.Item>
              
              </NavDropdown>
                
              <Nav.Link href="#ask" className="text-white">Ask!</Nav.Link>
              <Nav.Link href="#videos" className="text-white">Videos</Nav.Link>
              <Nav.Link href="#webstories" className="text-white">Web Stories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-dropdown .dropdown-toggle {
          color: white !important;
        }
        .custom-dropdown .dropdown-menu {
          background-color: #222;
        }
        .custom-dropdown .dropdown-item {
          color: white;
        }
        .custom-dropdown .dropdown-item:hover {
          background-color: #444;
        }
      `}</style>


    </div>
  );
}

export default Header;
