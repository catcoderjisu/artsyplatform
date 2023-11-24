import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Mypage from "./components/mypage.jsx";
import Result from "./pages/Result.jsx";
import Layout from "./Layout.jsx";
import Profiles from "./pages/Profiles.jsx";
import PaymentComponent from "./components/PaymentComponent.jsx";

// 모든 route를 Layout으로 감싸, 모든 페이지에서 Navbar가 뜨도록 설정
const Router = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/profile" element={<Profiles />} />
            <Route path="/result" element={<Result />} />
            <Route path="/payment" element={<PaymentComponent />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default Router;
