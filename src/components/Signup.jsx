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

  // 이미지 업로드 input의 onChange
  const saveImageFile = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  async function handleSignupDataSubmit(e) {
    // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("profileimage", imageRef[0]) //files[0] === upload file
      // .env를 바탕으로 backend 상대경로를 지정해 송신
      const value = [{
        email: email,
        username: username,
        phonenumber: phonenumber,
        homeaddress: homeaddress,
        password: password,
        passwordverification: passwordverification
      }]
      // Blob을 사용하여 object인 value를 json으로 변환 후, json option 지정 후 blob이라는 변수에 반환 
      const blob = new Blob([JSON.stringify(value)], { type: "application/json" })

      formData.append("profilecontent", blob) // 또는  formData.append("data", JSON.stringify(value)); // JSON 형식으로 파싱.(백엔드의 요청에 따라 전송방식이 달라진다.)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',  // 데이터 형식 지정
          // access_token: access_token,  // Signup 시에는 access_token을 받지 않음.
        },
      };

      const response = await axios.post(
        `${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/signup/`,
        formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
        config
      )
      console.log('Signup 진행 중:', response.data);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  }

  const handleLoginClick = () => {
    navigate('../login')
  };

  // profile 이미지와 
  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>회원가입</h1>
      <form onSubmit={handleSignupDataSubmit}>
        <div>
          <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지 추가</label>
          <input
            className="signup-profileImg-input"
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImageFile}
            ref = {imageRef}
          />
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