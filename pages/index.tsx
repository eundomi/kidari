import Head from "next/head";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";
import List from "../components/List";
const Home = () => {
  return (
    <>
      <Head>
        <title>주소 등록 및 삭제</title>
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
