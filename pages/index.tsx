import Head from "next/head";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

const Home = () => {
  return (
    <>
      <Head>
        <title>키다리스튜디오 과제전형</title>
      </Head>
      <HomeWrap>등록된 주소 목록</HomeWrap>
    </>
  );
};

export default Home;

const HomeWrap = styled.div`
  text-align: center;
  color: #72757e;
`;
