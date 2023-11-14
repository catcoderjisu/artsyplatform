import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';
import Mypage from './components/mypage.jsx';
import Profile from './components/profile.jsx';
import Result from './components/result.jsx';
import Layout from './Layout.jsx';



// 모든 route를 Layout으로 감싸, 모든 페이지에서 Navbar가 뜨도록 설정
const Router = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path='/login' element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/mypage" element={<Mypage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/result" element={<Result />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default Router;