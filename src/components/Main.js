import React from 'react'
import '../App.css';
function Main() {

  let data = "Hi from React!";
  return(
    <div>
      <h1 style={ { color: 'skyblue' } }>{ data }</h1>
    </div>
  );
}

export default Main;

