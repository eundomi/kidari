import {useCallback, useState, useEffect} from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {
  addressState,
  zoneCodesState,
  contentsState,
  nameState,
  IAddressTypes,
} from "../recoil/states";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

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
    name: name,
    zonecode: zoneCode,
    address: address,
  };



  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(contents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setContents(items);
  }

  useEffect(() => {
    setwinReady(true);
  }, []);
  console.log(contents)


  // @ts-ignore
  const ListItem = ({id, name, zonecode, address}, index) => {
    const [editMode, setEditMode] = useState(false);

    const deleteContent = useCallback(
      (id: number) => {
        setContents(
          contents.filter((contents: IAddressTypes) => contents.id !== id)
        );
        console.log(id)
      },
      [setContents, contents]
    );

    const EditContent = (id: number) => {
      setEditMode(!editMode);
      console.log(editMode);
      console.log(id);
    }
    return (
      <>
        <Text>
          {editMode ? <input value={name} placeholder="이름" /> : (<Input>{name}</Input>)}
          <Input>{zonecode}<br/>{address}</Input>
        </Text>
        <Img>
          {editMode?(<Edit
            src="/Check.svg"
            onClick={() => EditContent(id)}
          />):(<Edit
            src="/Edit.svg"
            onClick={() => EditContent(id)}
            />)}
          <Delete
            src="/Delete.svg"
            onClick={() => deleteContent(id)}
          />
        </Img>
      </>
    );
  };


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
              {contents.map(({id, name, zonecode, address}, index) => {
                return (
                  <Draggable key={id} draggableId={zonecode} index={index}>
                    {(provided) => (
                      <ListWrapper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListItem key={index}
                                  id={id}
                                  name={name}
                                  address={address}
                                  zonecode={zonecode}
                                  ></ListItem>

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
  overflow: visible;
  //img {
  //  display: none;
  //}
  //:hover {
  //  img {
  //    display: block;
  //    
  //  }
  //}
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
  overflow: visible;
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
const Img = styled.div`
  display: flex;
  width: 55px;
  justify-content: space-between;`
