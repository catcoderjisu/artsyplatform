// login page
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hi!');
    // Here you can add your authentication logic, such as sending a request to a server.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/login', {
            email,
            password,
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

  const handleSignUpClick = () => {
    // You can add the logic to navigate to the sign-up page or open a sign-up modal here.
    console.log('Sign Up clicked');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="formbox">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className='formbox'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleSignUpClick}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
