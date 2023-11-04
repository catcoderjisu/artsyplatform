import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav.js';

function App() {

  let data = "Hi from React!";

  return (
    <div className="App">
      <Nav />;
      <h1 style={ { color: 'skyblue' } }>{ data }</h1>
    Bye Header:(
    </div>
  );
}

export default App;
