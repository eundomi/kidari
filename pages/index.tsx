import Head from "next/head";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";
import List from "../components/List";
const Home = () => {
  return (
    <>
      <Head>
        <title>키다리스튜디오 과제전형</title>
        {/* <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script> */}
      </Head>
      <HomeWrapper>
        <HomeText>등록된 주소 목록</HomeText>
        <List />
      </HomeWrapper>
    </>
  );
};

export default Home;
const HomeWrapper = styled.div`
  padding: 16px;
`;
const HomeText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0;
  color: #72757e;
`;
