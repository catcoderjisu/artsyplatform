import React, { useRef, useState, useEffect } from 'react';
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
  const [profileimage, setProfileImage] = useState('');

  const imageRef = useRef();

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

  // Signup page 렌더링 시 email input에 포커스가 되도록 useRef, useEffect를 사용
  const emailInputRef = useRef();

  // re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    emailInputRef.current.focus();
  }, [])

  // 이미지 미리보기 함수
  const encodeFileToBase64  = (fileblob) => {
    const reader = new FileReader();  // 이미지 업로드 시 Filereader 인스턴스 생성
    reader.readAsDataURL(fileblob); // 이미지를 base64로 인코딩
    return new Promise((resolve) => {
      reader.onload = () => {
        setProfileImage(reader.result); // reader가 incoding 완료 시 reader.result를 profileimage에 넣음
        resolve();  // resolve를 호출해 Promise를 이행 상태로 변환
      };
    });
  };

  async function handleSignupDataSubmit(e) {
    // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    e.preventDefault();
    console.log('여까진됨1')
    try {
      const formData = new FormData()
      console.log('여까진됨2')
      formData.append("profile_image", profileimage[0]) //files[0] === upload file
      // .env를 바탕으로 backend 상대경로를 지정해 송신
      console.log('여까진됨3')
      formData.append("email", email)
      formData.append("username", username)
      formData.append("phone_number", phonenumber)
      formData.append("address", homeaddress)
      formData.append("password", password)
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/`, formData)
      console.log('Signup 진행 중:', response.data);
      navigate('../login')
    } catch (error) {
      console.error('Authentication failed', error);
    }
  }

  const handleLoginClick = () => {
    navigate('../login')
  };

  // 논리연산자를 사용하여 이미지 업로드 시 조건부 랜더링
  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>회원가입</h1>
      <form onSubmit={handleSignupDataSubmit}>
        <div className='box'>
          <input
            className="signup-profileImg-input"
            type="file"
            accept="image/*"
            onChange={(e) => {encodeFileToBase64(e.target.files[0])}}
          />
      <div className="preview">
        {profileimage ? <img src={profileimage} alt="preview-img" /> : <img src="../public/apology.jpeg"/>}
      </div>
        </div>
        <div className="formbox">
          <label>*Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} ref={emailInputRef}/>
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