import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';


// logout function. 임시로 여기에 배치
function handleLogout() {
  localStorage.removeItem("access")
  localStorage.removeItem("refresh")
  localStorage.removeItem("payload")
}


// localStorage의 access 토큰을 읽어, 로그인했을 시 로그아웃 링크만 출력
const userMenu = () => {
  if (localStorage.getItem("access") === null) {
    return (
      <>
        <Link className="navMenu" to={'/login'}>Login</Link>
        <Link className="navMenu" to={'/signup'}>Sign in</Link>
      </>
    )
  } else {
    return (
      <>
        <Link className="navMenu_r" to={'/profile'}>PROFILE /</Link>
        <Link className="navMenu_r" onClick={handleLogout}>Logout</Link>
      </>
    )
  }
}


// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Nav() {
  return (
    <div>
      <div className="navb">
        <Link className="navMenu" to={'/'}>PROJ. NO NAME /</Link>
        <Link className="navMenu" to={'/mypage'}>MYPAGE /</Link>
        <Link className="navMenu" to={'/result'}>RESULT /</Link>
        <Link className="navMenu" to={'/contact'}>CONTACT US /</Link>
          {userMenu()}
      </div>
    </div>
  );
}

export default Nav;
