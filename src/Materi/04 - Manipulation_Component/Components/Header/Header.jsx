import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      {props.children}
    </header>
  )
}

Header.defaultProps = {
  cartCounter : 0
}

export default Header