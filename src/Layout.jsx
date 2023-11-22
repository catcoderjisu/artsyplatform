import { useNavigate, Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import './App.css';



// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Layout({ children }) {
  const navigate = useNavigate();
  // logout function. 실행 시 localstorage의 ACCESS_TOKEN을 제거하고 main page로 이동 후 새로고침을 하여 navbar를 다시 띄운다.
  function handleLogout() {
    localStorage.removeItem("ACCESS_TOKEN")
    navigate('../')
    window.location.reload();
  }
  // Router.js의 Route를 children으로 받아, 상단 Navbar, 중단 페이지, 하단 footer 구조를 만듦.
  // localstorage에 ACCESS_TOKEN이 있을 경우 PROFILE과 LOGOUT이, 없을 경우 LOGIN과 SIGNIN이 navbar에 뜨도록 설정
  return (
    <div>
      <div className="navb">
        <Link className="navMenu" to={'/'}>PROJ. NO NAME /</Link>
        <Link className="navMenu" to={'/mypage'}>MYPAGE /</Link>
        <Link className="navMenu" to={'/result'}>RESULT /</Link>
        <Link className="navMenu" to={'/contact'}>CONTACT US /</Link>
        {localStorage.getItem("ACCESS_TOKEN")
        ? <>
        <Link className="navMenu" to={'/profile'}>PROFILE /</Link>
        <Link className="navMenu" onClick={handleLogout}>LOGOUT</Link>
          </>
        :<>
        <Link className="navMenu" to={'/login'}>LOGIN</Link>
        <Link className="navMenu" to={'/signup'}>SINGIN</Link>
        </>
      }
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
