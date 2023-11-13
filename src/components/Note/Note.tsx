import React, { FC } from 'react';
import { Card, Buttons, Button, Text } from './styled';
import Edit from '../../assets/img/edit.svg';
import Delete from '../../assets/img/delete.svg';

interface INote {
  id: number;
  color: string;
  note: string;
}

const Note: FC<INote> = ({ color, note, id }) => {
  return (
    <Card bg={color}>
      <Buttons>
        <Button onClick={() => console.log('кликнуто по эдиту')}>
          <img src={Edit} alt="Edit note" />
        </Button>
        <Button onClick={() => console.log('кликнуто по делиту')}>
          <img src={Delete} alt="Delete note" />
        </Button>
      </Buttons>
      <Text> {note} </Text>
    </Card>
  );
};

export default Note;
