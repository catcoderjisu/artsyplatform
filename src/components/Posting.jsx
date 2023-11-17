import React from 'react'

function Posting({ id, image, content }) {
  return (
    <div>
        <img src={image} alt='No Image'/>
        <p>ID:{id}. {content}</p>
    </div>
  )
}

export default Posting;