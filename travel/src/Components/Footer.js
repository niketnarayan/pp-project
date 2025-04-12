// Footer.js
import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer-wrapper">

      <footer className="footer-bg text-light py-5">
        <Container>
          <Row>
            <Col md={3} sm={6}>
              <h6 className="footer-heading">USE FULL LINK</h6>
              <ul className="footer-links">
                <li>Blog</li>
                <li>About Us</li>
                <li>Distance Chart</li>
                <li>Travel Tips</li>
                <li>Photo Gallery</li>
                <li>Wedding Transport</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6 className="footer-heading">BOOK A CAR</h6>
              <ul className="footer-links">
                <li>Swift Dzire Car Hire</li>
                <li>Toyota Etios Car Hire</li>
                <li>Honda City Car Hire</li>
                <li>Toyota Innova Car Hire</li>
                <li>Toyota Fortuner Car Hire</li>
                <li>Toyota Innova Crysta Car</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6 className="footer-heading">CAR / COACH HIRE</h6>
              <ul className="footer-links">
                <li>Bus Hire for Wedding Purpose</li>
                <li>Car Hire for Wedding Purpose</li>
                <li>Mini Bus Hire</li>
                <li>Car Hire for Outstation</li>
                <li>9 Seater Traveller Hire</li>
                <li>17 Seater Traveller Hire</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6 className="footer-heading">PAYMENTS DETAILS</h6>
              <ul className="footer-links">
                <li>Payment</li>
                <li>Bank Details</li>
                <li>Feed Back</li>
                <li>Disclaimer</li>
                <li>Cancellation & Refund</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Download Invoice</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <div style={{
  backgroundColor: '#000',
  color: '#ccc',
  textAlign: 'center',
  padding: '12px 0',
  fontSize: '14px'
}}>
  © {new Date().getFullYear()} ANT Travels. All rights reserved.
</div>
    </div>
  );
};

export default Footer;
