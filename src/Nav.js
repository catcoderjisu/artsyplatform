import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

// logout function을 임시로 여기에 배치
function handleLogout() {
  localStorage.removeItem("access")
  localStorage.removeItem("refresh")
  localStorage.removeItem("payload")
}


// localStorage의 access 토큰을 읽어, 로그인했을 시 로그아웃 링크만 출력
const userMenu = () => {
  if (localStorage.getItem("access") === null) {
    return (
      <div>
        <Link className="navUserMenu" to={'/login'}>Login</Link>
        <Link className="navUserMenu" to={'/signin'}>Sign in</Link>
      </div>
    )

  } else {
    <div>
      <Link className="navUserMenu" onClick={handleLogout}>Logout</Link>
    </div>
  }
}



function Nav() {
  return (
  <div>
    <div className = "navb">
      <div>
      <Link className="navMenu" to={'/'}>Main</Link>
      <Link className="navMenu" to={'/'}>My page</Link>
      <Link className="navMenu" to={'/contact'}>Contact us</Link>
      </div>
      {userMenu()}
    </div>
  </div>
  );
}

// Nav 컴포넌트 수
export default Nav;
