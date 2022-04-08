import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Swal from "sweetalert2";

export default function List() {
  return (
    <ListWrapper>
      <Input id="postcode">13357</Input>
      <Input id="address">경기 성남시 중원구 산성대로 198</Input>
      <Delete src="/Delete.svg" />
    </ListWrapper>
  );
}
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-color: #fdfdfd;
  border: none;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  img {
    display: none;
  }
  :hover {
    img {
      display: block;
    }
  }
`;
const Input = styled.span`
  background-color: #fdfdfd;
  border: none;
  color: #72757e;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  height: auto;
`;
const Delete = styled.img`
  position: absolute;
  right: 0;
  margin-right: 44px;
  width: 24px;
  :hover {
    cursor: pointer;
  }
`;
