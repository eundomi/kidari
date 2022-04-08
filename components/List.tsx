import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Swal from "sweetalert2";

export default function List() {
  return (
    <>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
      <ListWrapper>
        <Text>
          <Input id="postcode">13357</Input>
          <Input id="address">경기 성남시 중원구 산성대로 198</Input>
        </Text>
        <Delete src="/Delete.svg" />
      </ListWrapper>
    </>
  );
}
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-color: #fdfdfd;
  border: none;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  /* img {
    display: none;
  }
  :hover {
    img {
      display: block;
    }
  } */
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: space-around;
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
  width: 24px;
  :hover {
    cursor: pointer;
  }
`;
