import Head from "next/head";
import styled from "styled-components";
import Postcode from "./Postcode";
import { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import Modal from "antd";
const Button = () => {
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const oncomplete = async (data: any) => {
    console.log(data);

    setZipcode(data.zonecode); // 추가
    setRoadAddress(data.roadAddress); // 추가
    setIsModalVisible(false);
  };

  const showModal = () => {
    console.log("버튼 클릭함.");
  };
  return (
    <>
      <button onClick={showModal}>우편번호 검색</button>
      {isModalVisible && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {" "}
          <DaumPostCode onComplete={onCompleteDaumPostCode} />{" "}
        </Modal>
      )}
      <ButtonWrapper>
        <But onClick={showModal}>주소 추가하기</But>
      </ButtonWrapper>
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
const TodoItem = ({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
    // 선택한 Todo의 내용을 default value로 지정하는 작업
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }

    // Todo 업데이트 확인을 눌렀을때 객체 업데이트
    setTodos(
      todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <>
      <div className="TodoItem">
        <div
          title={contents}
          className={isCompleted ? "TodoItem-Completed" : ""}
          onClick={() => onComplete(id)}
        >
          {contents}
        </div>

        <div className="TodoItem-Icons">
          <FaPen className="TodoItem-Icons-Pen" onClick={onModify} />
          <MdClose
            className="TodoItem-Icons-Close"
            onClick={() => onDelete(id)}
          />
        </div>
      </div>
    </>
  );
};
