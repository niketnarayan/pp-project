import React from 'react'
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell, BoxArrowRight } from 'react-bootstrap-icons';
import {
    FaHome, FaTags, FaFileAlt, FaCogs, FaDesktop,
    FaShoppingCart, FaUsers, FaBullhorn, FaTools, FaChartBar
  } from 'react-icons/fa';

function Header() {
  return (
    <div>
     
     <Navbar bg="light" expand="lg" className="border-bottom shadow-sm py-2" fixed="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="text-primary fw-bold">Kalki 2.0</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center gap-3">
          {/* Notification Bell */}
          <Nav.Link href="#notifications">
            <Bell size={20} />
          </Nav.Link>

          {/* Language Flag */}
          <Nav.Link href="#language">
            <Image
              src="/english-flag.png"
              height="16"
              alt="Language"
              rounded
            />
          </Nav.Link>

          {/* User Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-user" className="d-flex align-items-center border-0">
              <Image
                src="/avatar.png"
                height="30"
                width="30"
                roundedCircle
                className="me-2"
              />
              System Administrator
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Logout */}
          <Nav.Link href="#logout">
            <BoxArrowRight size={20} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>


    <div style={{ 
           width: '250px',
           backgroundColor: '#1c2b36',
           height: '100vh',
           color: '#fff',
           position: 'fixed',
           top: '56px', // height of navbar
           left: 0,
           overflowY: 'auto'
     }}>
      <div className="p-3 fw-bold text-white">NAVIGATION</div>
      <Nav className="flex-column">

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaHome className="me-2" /> Dashboard
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaTags className="me-2" /> Catalog
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaFileAlt className="me-2" /> CMS
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaCogs className="me-2" /> Extensions
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaDesktop className="me-2" /> Design
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaShoppingCart className="me-2" /> Sales
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaUsers className="me-2" /> Customers
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaBullhorn className="me-2" /> Marketing
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaTools className="me-2" /> System
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaChartBar className="me-2" /> Reports
        </Nav.Link>

      </Nav>
    </div>


    </div>
  )
}

export default Header