// 메인 페이지!!!!!!
import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main() {
  // 다른 페이지로 이동할 수 있도록 navigate 선언
  const navigate = useNavigate();
  // searchbar 입력값 state 설정
  const [searchbarInput, setSearchbarInput] = useState("here is our searchbar")

  const handleSearchbarInputChange = (e) => {
    setSearchbarInput(e.target.value);
  };
  // page 렌더링 시 searchbar에 포커스가 되도록 useRef, useEffect를 사용
  const searchbarInputRef = useRef();

  // re-render가 될 시에도 실행되는 경우를 방지하기 위해 빈 배열을 넣음
  useEffect(() => {
    searchbarInputRef.current.focus();
  }, [])


  // 서버에서 post를 조회하는 함수
  async function renderPostsIamges(e) {
    // 
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      const response = await axios.get(
        `${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_BACKEND_PORT}/`
        );
      if (response) {
        console.log("post를 모두 불러오는 중...");
        // post 이미지를 최신순으로 정렬하는 함수 실행
      }
    } catch (error) {
      console.error("Authentication failed", error);
    }
  }

  // 화면이 렌더링 되자마자 readImages 실행.
  useEffect(() => {
    renderPostsIamges();
  }, [])
  
  // result page로 이동시키는 함수
  const handleResultPageClick = () => {
    navigate('../result')
  };


  return(
    <div className="Mainpg">
      <ul id="search_engine">
        <input className="searchbar" value={searchbarInput} onChange={handleSearchbarInputChange} ref={searchbarInputRef} />
        <button type="button" className="button01" onClick={handleResultPageClick}>
          Create!!
        </button>
      </ul>

    </div>
  );
}

export default Main;
