import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'


function SignUp() {

  // navigate 선언
  const navigate = useNavigate();

  // frontend에서 처리할 수 있는 validation-test 변수 선언
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  // 해당하는 값 입력 시 화면에 render되도록 useState 사용
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [homeaddress, setHomeAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordverification, setPasswordVerification] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleHomeAdressChange = (e) => {
    setHomeAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordVerificationChange = (e) => {
    setPasswordVerification(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hi!');
    // Here you can add your authentication logic, such as sending a request to a server.
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // .env를 바탕으로 frontend 상대경로를 지정
        const response = await axios.post(
          `${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_FRONTEND_PORT}/accounts/login`, {
          "email": email,
          "password": password,
        });

        // Handle the authentication response from the server, e.g., save the token.
        // You can also perform redirection or other actions based on the response.

        console.log('Authentication successful', response.data);
      } catch (error) {
        // Handle authentication errors here, e.g., display an error message.
        console.error('Authentication failed', error);
      }
    };

  };

  const handleLoginClick = () => {
    navigate('../login')
  };

  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="formbox">
          <label>*Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="formbox">
          <label>*UserName:</label>
          <input type="text" value={username} onChange={handleUserNameChange} />
        </div>

        <div className="formbox">
          <label>PhoneNumber:</label>
          <input type="text" value={phonenumber} onChange={handlePhoneNumberChange} placeholder='숫자만 입력해주세요' />
        </div>

        <div className="formbox">
          <label>HomeAdress:</label>
          <input type="text" value={homeaddress} onChange={handleHomeAdressChange} />
        </div>

        <div className='formbox'>
          <label>*P.W:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div className='formbox'>
          <label>*P.W 확인:</label>
          <input type="password" value={passwordverification} onChange={handlePasswordVerificationChange} />
        </div>

        <h3>* 표시는 필수 입력 항목입니다.</h3>
        <button type="submit" className="button01">SignUp</button>
        <button type="button" className="button01" onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}

export default SignUp;