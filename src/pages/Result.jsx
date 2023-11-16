import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Result() {
  // post의 title과 content state 지정
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // login page 렌더링 시 email input에 포커스가 되도록 useRef, useEffect를 사용
  const titleInputRef = useRef();

  // re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    titleInputRef.current.focus();
  }, [])

  const handlePosting = (e) => {
    e.preventDefault();
    alert('Postin Postin!');
  }
  
  const handleSaveIamgeOnDatabase = (e) => {
    e.preventDefault();
    // database에 저장하는 로직
  }




  return(
    <>
    <div className='box'>DALL-E 이미지가 들어갈 상자</div>
    <form onSubmit={handleSaveIamgeOnDatabase}>
        <div className="formbox">
          <label>*Post title:</label>
          <input type="text" value={title} onChange={handleTitleChange} ref={titleInputRef}/>
        </div>
        <div className="formbox">
          <label>*Post content:</label>
          <input type="text" value={content} onChange={handleContentChange}/>
        </div>
        <button type="submit" className="button01">Save on your Database</button>
      </form>
      </>

      

  );
}

export default Result;
