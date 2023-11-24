import React from "react";
import { Iamport } from "iamport-react";
import axios from "axios"; //결제요청을 서버로 전송하기 위해 axios 라이브러리 사

const RequestPay = () => {
  const { IMP } = Iamport;

  const requestPay = async () => {
    try {
      // 아임포트 결제 요청
      const rsp = await IMP.request_pay({
        // param
        pg: "tosspay",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      });

      if (rsp.success) {
        // 결제 성공 시 서버에 결제 정보 전송
        await axios.post("/payment", {
          paymentInfo: rsp,
          // 추가적인 정보를 전송할 수 있음
        });

        console.log("결제 성공:", rsp);
      } else {
        // 결제 실패 시 로직
        console.log("결제 실패:", rsp);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div>
      {/* 필요한 컴포넌트나 UI를 추가하세요. */}
      <button onClick={requestPay}>결제 요청</button>
    </div>
  );
};

export default RequestPay;
