import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell, BoxArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import {
    FaHome, FaTags, FaFileAlt, FaCogs, FaDesktop,
    FaShoppingCart, FaUsers, FaBullhorn, FaTools, FaChartBar
  } from 'react-icons/fa';
  import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function Header() {

  const [openCatalog, setOpenCatalog] = useState(false);
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
           overflow: 'auto'
     }}>
      <div className="p-3 fw-bold text-white">NAVIGATION</div>
      <Nav className="flex-column bg-dark">
      <Nav.Item>
        <Link to="/" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaHome className="me-2" /> Dashboard
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      {/* Catalog Dropdown */}
      <div
        onClick={() => setOpenCatalog(!openCatalog)}
        className="text-white d-flex align-items-center justify-content-between px-3 py-2"
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex align-items-center">
          <FaTags className="me-2" /> Catalog
        </div>
        {openCatalog ? <BiChevronUp /> : <BiChevronDown />}
      </div>

      {openCatalog && (
  <div className="text-white" style={{ fontSize: '14px' }}>
    <div className="ms-4">
      <Link to="/categories" className="nav-link text-white py-1">» Categories</Link>
      <Link to="/product" className="nav-link text-white py-1">» Products</Link>
      <Link to="/catalog/subscription-plans" className="nav-link text-white py-1">» Subscription Plans</Link>
      <Link to="/catalog/filters" className="nav-link text-white py-1">» Filters</Link>
      <Link to="/catalog/attributes" className="nav-link text-white py-1">» Attributes</Link>
      <Link to="/catalog/options" className="nav-link text-white py-1">» Options</Link>
      <Link to="/catalog/manufacturers" className="nav-link text-white py-1">» Manufacturers</Link>
      <Link to="/catalog/identifiers" className="nav-link text-white py-1">» Identifiers</Link>
      <Link to="/catalog/downloads" className="nav-link text-white py-1">» Downloads</Link>
      <Link to="/catalog/reviews" className="nav-link text-white py-1">» Reviews</Link>
      <Link to="/catalog/information" className="nav-link text-white py-1">» Information</Link>
    </div>
  </div>  
)}
      <div className="border-top border-secondary mx-3" />

      {/* Other Links */}
      <Nav.Item>
        <Link to="/cms" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaFileAlt className="me-2" /> CMS
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/extensions" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaCogs className="me-2" /> Extensions
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/design" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaDesktop className="me-2" /> Design
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/sales" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaShoppingCart className="me-2" /> Sales
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/customers" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaUsers className="me-2" /> Customers
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/marketing" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaBullhorn className="me-2" /> Marketing
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/system" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaTools className="me-2" /> System
        </Link>
      </Nav.Item>
      <div className="border-top border-secondary mx-3" />

      <Nav.Item>
        <Link to="/reports" className="nav-link text-white d-flex align-items-center" style={{ padding: '12px 20px' }}>
          <FaChartBar className="me-2" /> Reports
        </Link>
      </Nav.Item>
    </Nav>


    </div>


    </div>
  )
}

export default Header