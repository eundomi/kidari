import React from "react";
import Header from "./Header";
import Button from "../components/Button";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <Header />
      <Child>{children}</Child>
      <Button />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;
const Child = styled.div`
  height: 100%;
  margin-bottom: 72px;
  overflow: auto;
`;
