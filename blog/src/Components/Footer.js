import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const footerStyle = {
backgroundColor: '#2c3e50',
backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
color: 'white',
padding: '30px 0',
textAlign: 'center',
fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.1)',
borderTop: '1px solid rgba(255, 255, 255, 0.1)'
};

const headingStyle = {
fontSize: '1.2rem',
fontWeight: 'bold',
marginBottom: '15px',
textTransform: 'uppercase',
letterSpacing: '1px'
};

const textStyle = {
fontSize: '0.9rem',
marginBottom: '10px',
opacity: '0.8'
};

const socialIconsStyle = {
display: 'flex',
justifyContent: 'center',
gap: '15px',
margin: '20px 0'
};

const iconStyle = {
color: 'white',
fontSize: '1.5rem',
transition: 'all 0.3s ease',
':hover': {
color: '#4ca1af',
transform: 'scale(1.2)'
}
};

const copyrightStyle = {
fontSize: '0.8rem',
opacity: '0.6',
marginTop: '20px',
paddingTop: '20px',
borderTop: '1px solid rgba(255, 255, 255, 0.1)'
};
  return (
    <div>

        <footer style={footerStyle}>
<Container>
<Row>
<Col md={4}>
<div style={headingStyle}>RAJ TECH INFORMATION</div>
</Col>
<Col md={4}>
<div style={headingStyle}>/WHATSAPP CHANNEL/</div>
</Col>
<Col md={4}>
<div style={headingStyle}>FOLLOW ON SOCIAL</div>
<div style={socialIconsStyle}>
<a href="#" style={iconStyle}>📱</a>
<a href="#" style={iconStyle}>💬</a>
<a href="#" style={iconStyle}>📸</a>
<a href="#" style={iconStyle}>🔗</a>
</div>
</Col>
</Row>
<Row>
<Col md={12}>
<div style={{...headingStyle, marginTop: '20px'}}>OUR COMPANY POLICY</div>
</Col>
</Row>
<Row>
<Col md={12}>
<div style={copyrightStyle}>
COMMUNE 09:2023 / ALL RIGHT RESERVED.
</div>
</Col>
</Row>
</Container>
</footer>
      
    </div>
  )
}

export default Footer
