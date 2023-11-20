import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"

function Profiles() {
    const [profileinformation, setProfileinformation] = useState('')

    // Profile 정보를 불러오는 profile information을 첫 렌더링 시에만 실행하기 위해 useEffect와 빈 배열 사용
    useEffect(() => {
        handleProfileInformation();
    }, [])

    // 서버에 프로필 정보 요청하는 함수
    async function handleProfileInformation() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/profile/`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, // 토큰 전달
            });
            if (response) {
                setProfileinformation(response.data);
            }
        } catch (error) {
            console.log("response 없음")
            console.error("Authentication failed", error);
        }
    }

    // 일단 list로 작성했는데, 추후 상황에 맞게 수정 예정
    return (
        <div className="largebox">
            <ul>
                <li>ID: {profileinformation.id}</li>
                <li>Username: {profileinformation.username}</li>
                <li>E-mail: {profileinformation.email}</li>
                <li>Phone_number: {profileinformation.phone_number}</li>
                <li>Address: {profileinformation.address}</li>
            </ul>
        </div>
    )
}

export default Profiles;