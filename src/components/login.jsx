// login page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Login() {
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  // navigate 선언
  const navigate = useNavigate();

  // email, password 입력 시 화면에 render되도록 useState 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 request를 서버로 보내는 함수
  async function handleLoginDataSubmit(e) {
    e.preventDefault();
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      const response = await axios.post(`${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/login`, {
        email: email,
        password: password
      });
      console.log('Login 진행 중:', response.data);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  }

  // signup page로 이동시키는 함수
  const handleSignUpClick = () => {
    navigate('../signup')
  };

  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>로그인</h1>
      <form onSubmit={handleLoginDataSubmit}>
        <div className="formbox">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='formbox'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <h3></h3>
        <button type="submit" className="button01">Login</button>
        <button type="button" className="button01" onClick={handleSignUpClick}>Sign Up</button>
      </form>
    </div>
    );
};

export default Login;
