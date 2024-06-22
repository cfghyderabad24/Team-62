import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <header style={headerStyle}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHlxVwS8JynktGFnCQ30V02GlRFrWInQP2g&s" alt="" className='logo' />
      <h1 className='display-inline'>Jaldhaara Foundation</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1px',
  fontSize: "40px"
  
};

export default Header;
