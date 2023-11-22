import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Result() {
  // post의 content state 지정
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // login page 렌더링 시 email input에 포커스가 되도록 useRef, useEffect를 사용
  const contentInputRef = useRef();

  // re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    contentInputRef.current.focus();
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
          <label>*Post content:</label>
          <input type="text" value={content} onChange={handleContentChange} ref={contentInputRef} />
        </div>
        <button type="submit" className="button01">Save on your Database</button>
      </form>
      </>

      

  );
}

export default Result;
