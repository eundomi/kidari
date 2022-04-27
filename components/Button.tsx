import Script from "next/script";
import { useState, useCallback, ChangeEvent } from "react";
import { Modal } from "antd";
import DaumPostCode from "react-daum-postcode";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  addressState,
  zoneCodesState,
  contentsState,
  isModalVisible,
  IAddressTypes,
} from "../recoil/states";


const Button = () => {
  const [modalVisible, setModalVisible] = useRecoilState(isModalVisible);

  const [address, setAddress] = useRecoilState(addressState);
  const [zoneCode, setZonecode] = useRecoilState(zoneCodesState);
  const [contents, setContents] =
    useRecoilState<IAddressTypes[]>(contentsState);

  //address 추가하기
  const addAddress = useCallback((): void => {
    const nextId =
      contents.length > 0 ? contents[contents.length - 1].id + 1 : 0;
    const content: IAddressTypes = {
      id: nextId,
      zonecode: zoneCode,
      address: address,
    };

    setContents([...contents, content]);
    setAddress("");
    setZonecode("");
  }, [address, setAddress, zoneCode, setZonecode, contents, setContents]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onCompleteDaumPostCode = async (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setModalVisible(false);

    const nextId =
      contents.length > 0 ? contents[contents.length - 1].id + 1 : 0;
    const content: IAddressTypes = {
      id: nextId,
      zonecode: data.zonecode,
      address: data.address,
    };

    setContents([...contents, content]);
  };

  return (
    <>
      <ButtonWrapper>
        <But onClick={showModal}>주소 검색</But>
      </ButtonWrapper>
      {modalVisible && (
        <Modal
          title="주소 검색하기"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >

          <DaumPostCode onComplete={onCompleteDaumPostCode} />
        </Modal>
      )}
    </>
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
