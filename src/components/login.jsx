// login page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

// backend_base_url를 로컬로 설정
const backend_base_url = "http://localhost:8000/"

function Login() {
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  // navigate 선언
  const navigate = useNavigate();

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
      const response = await axios.post(`${backend_base_url}/accounts/login`, {
        email: email,
        password: password
      });
      console.log('Login 진행 중:', response.data);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  }

  const handleSignUpClick = () => {
    // You can add the logic to navigate to the sign-up page or open a sign-up modal here.
    // eslint-disable-next-line no-restricted-globals
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
