import React, { FC, useState, useEffect } from 'react';
import {
  Card,
  ButtonsIcon,
  ButtonIcon,
  Text,
  Modal,
  ModalContent,
  EditTitle,
  Block,
  Textarea,
  SelectColorBlock,
  SelectColorButton,
} from './styled';
import { Button } from '../App/global';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { editNote, removeNote } from '../../redux/notes/asyncActions';

import Edit from '../../assets/img/edit.svg';
import EditDark from '../../assets/img/editDark.svg';
import Delete from '../../assets/img/delete.svg';
import DeleteDark from '../../assets/img/deleteDark.svg';

interface INote {
  id?: number;
  color: string;
  note: string;
  order?: any;
  data: any;
  dragStartHandler: any;
  dragEndHandler: any;
  dragOverHandler: any;
  dropHandler: any;
}

const Note: FC<INote> = ({
  color,
  note,
  id,
  order,
  data,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  const dispatch = useAppDispatch();
  const [textIsWhite, setTextIsWhite] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editIsClicked, setEditIsClicked] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>(note);
  const [noteColor, setNoteColor] = useState<string>(color);

  useEffect(() => {
    if (color === '#ffffff') {
      setTextIsWhite(false);
    } else {
      setTextIsWhite(true);
    }
  }, []);

  const handleDeleteNote = () => {
    dispatch(removeNote({ id }));
  };

  const handleCancelEdit = () => {
    setNoteColor(color);
    setNoteText(note);
    setEditIsClicked(false);
  };

  return (
    <div
      draggable={true}
      onDragStart={(e: any) => dragStartHandler(e, data)}
      onDragLeave={(e: any) => dragEndHandler(e)}
      onDragEnd={(e: any) => dragEndHandler(e)}
      onDragOver={(e: any) => dragOverHandler(e)}
      onDrop={(e: any) => dropHandler(e, data)}>
      {!editIsClicked ? (
        <Card $bg={noteColor} $color={textIsWhite}>
          <ButtonsIcon $color={textIsWhite}>
            <ButtonIcon onClick={() => setEditIsClicked(true)}>
              <img src={textIsWhite ? Edit : EditDark} alt="Edit note" />
            </ButtonIcon>
            <ButtonIcon onClick={() => setShowModal(true)}>
              <img src={textIsWhite ? Delete : DeleteDark} alt="Delete note" />
            </ButtonIcon>
          </ButtonsIcon>
          {showModal && (
            <Modal>
              <ModalContent>
                <p>Do you want to delete this note?</p>
                <button onClick={() => handleDeleteNote()}>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </ModalContent>
            </Modal>
          )}
          <Text> {noteText} </Text>
        </Card>
      ) : (
        <Card $bg={noteColor} $color={textIsWhite}>
          <EditTitle $color={textIsWhite}>Edit Note</EditTitle>
          <Block>
            <Textarea
              id="add_note"
              name="add_note"
              placeholder="Enter your note here.."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
            <SelectColorBlock>
              <SelectColorButton $bg={'#ffffff'} onClick={() => setNoteColor('#ffffff')} />
              <SelectColorButton $bg={'#42b883'} onClick={() => setNoteColor('#42b883')} />
              <SelectColorButton $bg={'#64c4ed'} onClick={() => setNoteColor('#64c4ed')} />
              <SelectColorButton $bg={'#fbc'} onClick={() => setNoteColor('#fbc')} />
              <SelectColorButton $bg={'#a2befa'} onClick={() => setNoteColor('#a2befa')} />
              <SelectColorButton $bg={'#ffaf3f'} onClick={() => setNoteColor('#ffaf3f')} />
              <SelectColorButton $bg={'#ef7564'} onClick={() => setNoteColor('#ef7564')} />
              <SelectColorButton $bg={'#cd8de5'} onClick={() => setNoteColor('#cd8de5')} />
              <SelectColorButton $bg={'#c9d1d3'} onClick={() => setNoteColor('#c9d1d3')} />
              <SelectColorButton $bg={'#7bc86c'} onClick={() => setNoteColor('#7bc86c')} />
              <SelectColorButton $bg={'#29cce5'} onClick={() => setNoteColor('#29cce5')} />
              <SelectColorButton $bg={'#ff8ed4'} onClick={() => setNoteColor('#ff8ed4')} />
            </SelectColorBlock>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <Button
                onClick={() =>
                  dispatch(editNote({ id: id, note: noteText, color: noteColor, order: id }))
                }>
                Save
              </Button>
              <Button onClick={handleCancelEdit}>Cancel</Button>
            </div>
          </Block>
        </Card>
      )}
    </div>
  );
};

export default Note;
