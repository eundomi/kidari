import Link from "next/link";
import { useRouter } from "next/router";
import { SetterOrUpdater } from "recoil";
import { useCallback } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  addressState,
  zoneCodesState,
  contentsState,
  IAddressTypes,
} from "../recoil/states";

export default function List({}) {
  const [address, setAddress] = useRecoilState(addressState);
  const [zoneCode, setZonecode] = useRecoilState(zoneCodesState);
  const [contents, setContents] =
    useRecoilState<IAddressTypes[]>(contentsState);
  const nextId = contents.length > 0 ? contents[contents.length - 1].id + 1 : 0;
  const content: IAddressTypes = {
    id: nextId,
    zonecode: zoneCode,
    address: address,
  };
  console.log(contents);

  const deleteContent = useCallback(
    (id: number) => {
      setContents(
        contents.filter((contents: IAddressTypes) => contents.id !== id)
      );
    },
    [setContents, contents]
  );
  return (
    <>
      {contents.map((content: IAddressTypes) => {
        const { id, zonecode, address } = content;
        return (
          <ListWrapper key={id} id={id} >
            <Text>
              <Input id="postcode">{zonecode}</Input>
              <Input id="address">{address}</Input>
            </Text>
            <Delete src="/Delete.svg" onClick={() => deleteContent(id)} />
          </ListWrapper>
        );
      })}
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
