import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

const backend_base_url = "http://localhost:8000/"

function SignUp() {

  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [homeaddress, setHomeAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordverification, setPasswordVerification] = useState('');



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hi!');
    // Here you can add your authentication logic, such as sending a request to a server.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${backend_base_url}/accounts/login`, {
            "email":email,
            "password":password,
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
    // You can add the logic to navigate to the sign-up page or open a sign-up modal here.
    // eslint-disable-next-line no-restricted-globals
    window.location.href('./login.jsx');
    console.log('Moved to login');
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
          <input type="password" value={passwordverification} onChange={handlePasswordChange} />
        </div>

        <h3>* 표시는 필수 입력 항목입니다.</h3>
        <button type="submit" className="button01">SignUp</button>
        <button type="button" className="button01" onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}

export default SignUp;