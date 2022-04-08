import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src="/Map.svg" />
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  height: 50px;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  height: 40px;
`;
