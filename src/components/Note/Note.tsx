import React, { FC, useState, useEffect } from 'react';
import { Card, Buttons, Button, Text } from './styled';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { editNote } from '../../redux/notes/asyncActions';

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

  useEffect(() => {
    if (color === '#ffffff') {
      setTextIsWhite(false);
    } else {
      setTextIsWhite(true);
    }
  }, []);

  const handleEditButton = () => {
    dispatch(editNote({ id: id, note: 'test change', color: color }));
  };

  const handleDeleteButton = () => {};

  return (
    <Card $bg={color} $color={textIsWhite}>
      <Buttons $color={textIsWhite}>
        <Button onClick={() => handleEditButton()}>
          <img src={textIsWhite ? Edit : EditDark} alt="Edit note" />
        </Button>
        <Button onClick={() => handleDeleteButton()}>
          <img src={textIsWhite ? Delete : DeleteDark} alt="Delete note" />
        </Button>
      </Buttons>
      <Text> {note} </Text>
    </Card>
  );
};

export default Note;
