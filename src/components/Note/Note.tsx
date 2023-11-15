import React, { FC, useState, useEffect } from 'react';
import { Card, Buttons, Button, Text, Modal, ModalContent } from './styled';

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
}

const Note: FC<INote> = ({ color, note, id }) => {
  const dispatch = useAppDispatch();
  const [textIsWhite, setTextIsWhite] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (color === '#ffffff') {
      setTextIsWhite(false);
    } else {
      setTextIsWhite(true);
    }
  }, []);

  const handleEditNote = () => {
    dispatch(editNote({ id: id, note: 'test change', color: color }));
  };

  const handleDeleteNote = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <Card $bg={color} $color={textIsWhite}>
      <Buttons $color={textIsWhite}>
        <Button onClick={() => handleEditNote()}>
          <img src={textIsWhite ? Edit : EditDark} alt="Edit note" />
        </Button>
        <Button onClick={() => setShowModal(true)}>
          <img src={textIsWhite ? Delete : DeleteDark} alt="Delete note" />
        </Button>
      </Buttons>
      {showModal &&
        <Modal>
          <ModalContent>
            <p>Удалить эту заметку?</p>
            <button onClick={() => handleDeleteNote()}>Да</button>
            <button onClick={() => setShowModal(false)}>Нет</button>
          </ModalContent>
        </Modal>
      }
      <Text> {note} </Text>
    </Card>
  );
};

export default Note;
