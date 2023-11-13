// modal component입니다.
import React from 'react';
import '../App.css';


function Modal({ isOpen, content, closeModal }) {
    return (
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div>{content}</div>
        <button onClick={closeModal}>Close</button>
      </div>
    );
  }

export default Modal;