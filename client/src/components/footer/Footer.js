import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Jaldhaara Foundation. All rights reserved.</p>
      <p>Contact: contact@jaldhaara.org</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  bottom: '0',
  width: '100%'
};

export default Footer;
