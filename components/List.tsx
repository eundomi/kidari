import Link from "next/link";
import { useRouter } from "next/router";
import { SetterOrUpdater } from "recoil";
import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  addressState,
  zoneCodesState,
  contentsState,
  nameState,
  IAddressTypes,
} from "../recoil/states";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function List({}) {
  const [winReady, setwinReady] = useState(false);
  const [name,setName]=useRecoilState(nameState);
  const [address, setAddress] = useRecoilState(addressState);
  const [zoneCode, setZonecode] = useRecoilState(zoneCodesState);
  const [contents, setContents] =
    useRecoilState<IAddressTypes[]>(contentsState);
  const nextId = contents.length > 0 ? contents[contents.length - 1].id + 1 : 0;
  const content: IAddressTypes = {
    id: nextId,
    name:name,
    zonecode: zoneCode,
    address: address,
  };

  const deleteContent = useCallback(
    (id: number) => {
      setContents(
        contents.filter((contents: IAddressTypes) => contents.id !== id)
      );
    },
    [setContents, contents]
  );

  function handleOnDragEnd(result:any) {
    if (!result.destination) return;
    const items = Array.from(contents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setContents(items);
  }
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {winReady && (
        <Droppable droppableId="contents">
          {(provided) => (
            <div
              className="List"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {contents.map(({ id,name, zonecode, address }, index) => {
                return (
                  <Draggable key={id} draggableId={zonecode} index={index}>
                    {(provided) => (
                      <ListWrapper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Text>
                          <Input>{name}</Input>
                          <Input>{zonecode}</Input>
                          <Input>{address}</Input>
                        </Text>
                        <Img>
                          <Edit
                              src="/Edit.svg"/>
                          <Delete
                              src="/Delete.svg"
                              onClick={() => deleteContent(id)}
                          />
                        </Img>

                      </ListWrapper>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
}
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 120px;
  border-radius: 8px;
  background-color: #fdfdfd;
  border: none;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  overflow:visible ;
  img {
    display: none;
  }
  :hover {
    img {
      display: block;
      
    }
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: space-around;
`;
const Input = styled.span`
  background-color: #fdfdfd;
  border: none;
  color: #72757e;
  font-weight: 400;
  font-size: 14px;
  overflow:visible ;
  height: auto;
`;
const Edit = styled.img`
  width: 24px;
  :hover {
    cursor: pointer;
  }
`;
const Delete = styled.img`
  width: 24px;
  :hover {
    cursor: pointer;
  }
`;
const Img=styled.div`
  display: flex;
width:50px;`
