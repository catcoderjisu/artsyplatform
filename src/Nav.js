import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

function Nav() {
  return (
  <div>
    <div className = "navb">
      <Link className="navMenu" to={'/'}>Main</Link>
      <Link className="navMenu" to={'/'}>My page</Link>
      <Link className="navMenu" to={'/contact'}>Contact us</Link>
    </div>
  </div>
  );
}

// Nav 컴포넌트 수
export default Nav;
