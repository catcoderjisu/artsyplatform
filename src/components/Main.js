// 메인 페이지!!!!!!
import React from 'react';
import '../App.css';
function Main() {

  let data = "Hi from React!";
  return(
    <div>
      <h1 style={ { color: 'skyblue' } }>{ data }</h1>
      Bye Header:(
      <div className='box'>
        <h1>Hey I'm Joshua from Cali</h1>
      </div>;
      <div className='box'>
        <h1>Hey I'm Joshua from Cali</h1>
      </div>;
      <div className='box'>
        <h1>Hey I'm Joshua from Cali</h1>
      </div>;
    </div>
  );
}

export default Main;
