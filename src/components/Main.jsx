// 메인 페이지!!!!!!
import React from 'react';
import '../App.css';
function Main() {

  let data = "Hi from React!";
  
  return(
    <div className="Mainpg">
      <h1 style={ { color: 'black' } }>{ data }</h1>
      <div className="seachbar">
        <h1>Hey I'm Joshua from Cali</h1>
      </div>
    </div>
  );
}

export default Main;
