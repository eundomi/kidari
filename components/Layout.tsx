import React from "react";
import Header from "./Header";
import Button from "../components/Button";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <Header />
      <div>{children}</div>
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
  flex-flow: column nowrap;
  margin: 0 auto;
  padding: 0 16px;
`;
