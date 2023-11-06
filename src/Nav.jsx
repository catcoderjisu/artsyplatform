import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

function Nav() {
  return (
  <div>
      <div className = "navb">
      <Link className="navMenu" to={'/'}>PROJ. NO NAME /</Link>
      <Link className="navMenu" to={'/login'}>LOGIN /</Link>
      <Link className="navMenu" to={'/profile'}>PROFILE /</Link>
      <Link className="navMenu" to={'/mypage'}>MYPAGE /</Link>
      <Link className="navMenu" to={'/result'}>RESULT /</Link>
      <Link className="navMenu" to={'/contact'}>CONTACT US</Link>
    </div>
  </div>
  );
}

// Nav 컴포넌트 수
export default Nav;
