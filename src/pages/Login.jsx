// login page
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Login() {
  // 서버 부담을 줄이기 위해 Front단에서 유효성검사. 아직은 사용 안함.
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  // login page 렌더링 시 email input에 포커스가 되도록 useRef, useEffect를 사용
  const emailInputRef = useRef();

  // re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    emailInputRef.current.focus();
  }, [])

  // navigate 선언
  const navigate = useNavigate();

  // email, password 입력 시 화면에 render되도록 useState 사용
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 request를 서버로 보내는 함수
  async function handleLoginDataSubmit(e) {
    e.preventDefault(); // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    localStorage.clear(); // 로그인 실행 시, 브라우저 로컬저장소에 있는 값을 모두 날려 충돌 방지 
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/token/`,
        {
          email: email,
          password: password,
        },
      );
      if (response) {
        localStorage.setItem('ACCESS_TOKEN', response.data.access); //access token을 local storage에 저장
        alert(`로그인 성공! 환영합니다`)
        navigate("../");  // token 저장 후 Main page로 이동
        window.location.replace("/")  // navbar 상태를 바꾸기 위해 새로고침
      }
    } catch (error) {
      console.error("Authentication failed", error);  // response를 못받아 error를 띄울 경우 콘솔에 에러 띄우기
    }
  }

  // signup page로 이동시키는 함수
  const handleSignUpClick = () => {
    navigate("../signup");
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleLoginDataSubmit}>
        <div className="formbox">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} ref={emailInputRef}/>
        </div>
        <div className="formbox">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <h3></h3>
        <button type="submit" className="button01">Login</button>
        <button type="button" className="button01" onClick={handleSignUpClick}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
