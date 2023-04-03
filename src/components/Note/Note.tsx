import React, { FC } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { INote } from '../../models/INote';
import { editNote, deleteNote } from '../../store/slices/NoteSlice';
import { Card, Buttons, Button, Text } from './styled';
import Delete from '../../img/delete.svg';
import Edit from '../../img/edit.svg';

const Note: FC<INote> = ({ id, note, color }) => {

  const dispatch = useAppDispatch();

  return (
    <Card bg={color}>
      <Buttons>
        <Button onClick={() => (console.log('кликнуто'))}>
          {/* <img src={Delete} alt="Delete note" /> */}
          <img src={Edit} alt="Edit note" />
        </Button>
      </Buttons>
      <Text> {note} </Text>
      {/* <Buttons> */}
        {/* <Button 
          onClick={() => dispatch(editNote({note, id, color}))}
        >
          edit note
        </Button>
        <Button 
          onClick={() => dispatch(deleteNote(id))}
        >
          delete note
        </Button> */}
      {/* </Buttons> */}
    </Card>
  );
};

export default Note;