import React from 'react'

function Posting({ id, image, content, author }) {
  return (
    <div>
        <img src={image} alt='No Image'/>
        <p>ID:{id}. </p>
        <p>{content}</p>
        <p>작성자:{author}</p>
    </div>
  )
}

export default Posting;