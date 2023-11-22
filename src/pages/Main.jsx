// 메인 페이지!!!!!!
import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Posting from '../components/Posting';

function Main() {
  // 다른 페이지로 이동할 수 있도록 navigate 선언
  const navigate = useNavigate();
  // searchbar 입력값 state 설정
  const [searchbarInput, setSearchbarInput] = useState("here is our searchbar");
  const [postlist, setPostList] = useState([]);

  const handleSearchbarInputChange = (e) => {
    setSearchbarInput(e.target.value);
  };
  // page 렌더링 시 searchbar에 포커스가 되도록 useRef, useEffect를 사용
  const searchbarInputRef = useRef();

  // re-render가 될 시에도 실행되는 경우를 방지하기 위해 빈 배열을 넣음
  useEffect(() => {
    searchbarInputRef.current.focus();
  }, [])

  // 화면이 렌더링 되자마자 readImages 실행.
  // useEffect(() => {
  //   renderPostsIamges();
  // }, [])


  // 서버에서 post를 조회하는 함수
  async function requestPostsImages() {
    try {
      console.log("ACESS_TOKEN:", localStorage.getItem("ACCESS_TOKEN"));
      setPostList([]);  // postlist 초기화
      // .env를 바탕으로 backend 상대경로를 지정. Query string을 사용하여 최신순으로 정렬. query string 사용 시 post?_sort=id&_order=desc 넣기
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") },
      }
      );
      console.log("response.data:", response.data)
      if (response) {
        console.log("post를 모두 불러오는 중...");
        setPostList(response.data);
      }
    } catch (error) {
      console.error("Authentication failed", error);
      // 아래 부분은 테스트를 위해서 넣어둔 것이니, 제대로 작성 시 수정 필요
      let defaultpostlist = [{
        id: 0,
        image: "이미지없음",
        content: "요청하신 post가 없습니다."
      },]
      setPostList(defaultpostlist);
    }
  }

  // DALL-E에 사용할 prompt를 서버에 전달하는 함수
  async function createPostImage() {
    try {
      console.log('searchbarInput:', searchbarInput)
      console.log('전달URL:', `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/dalle/`)
      console.log("ACCESS_TOKEN:", localStorage.getItem("ACCESS_TOKEN"))
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/dalle/`,
        {
          "prompt": searchbarInput
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, // 토큰 전달
        }
      );
      console.log("여기까진 됨")
      if (response) {
        console.log("이미지 생성 중...")
        console.log("response.data:", response.data)
      }
      navigate('../result')
    } catch (error) { 
      console.log("생성 실패")
      console.error("Authentication failed", error); }
  }



  return (
    <div className="Mainpg">
      <input className="searchbar" value={searchbarInput} onChange={handleSearchbarInputChange} ref={searchbarInputRef} />
      <button type="button" className="button01" onClick={createPostImage}>Create!!</button>
      <button type="button" className="button01" onClick={requestPostsImages}>Post data 요청하기</button>
      {postlist.map((posts) => (
        <Posting key={posts.id} id={posts.id} image={posts.image} content={posts.content} />
      ))}
    </div>
  );
}

export default Main;
