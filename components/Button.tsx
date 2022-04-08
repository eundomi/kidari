import Head from "next/head";
import styled from "styled-components";

const Button = () => {
  return (
    <ButtonWrapper>
      <But>주소 추가하기</But>
    </ButtonWrapper>
  );
};

export default Button;
const ButtonWrapper = styled.footer`
  position: absolute;
  width: 100%;
  padding: 0 16px;
  left: 0;
  bottom: 16px;
`;
const But = styled.button`
  width: 100%;
  height: 56px;
  background-color: #fe2bb2;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  :hover {
    background: #c50070;
  }
`;
