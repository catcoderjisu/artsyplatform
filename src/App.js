import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './components/Main.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream
      <div className="App">
        <Nav />;
=======
      <div className="App" style={{backgroundImage: 'url(https://ccdn.lezhin.com/v2/comics/5469317090312192/images/wide.jpg?updated=1634099797967&width=632)'}}>
        <Nav />
>>>>>>> Stashed changes
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
