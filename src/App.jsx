import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav.jsx';
import Main from './components/Main.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
