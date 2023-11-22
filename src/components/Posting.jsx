import React from 'react'

// Post에 image가 존재할 시 image를 띄우고, 아니면 기본 이미지 출력
function Posting({ id, image, content }) {
  return (
    <div>
        {{image}?<img src={image} alt='No Image'/>:<img src='../public/apology.jpeg' />}
        <p>ID:{id}</p>
        <p>{content}</p>
    </div>
  )
}

export default Posting;