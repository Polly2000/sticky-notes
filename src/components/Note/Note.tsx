import React, { FC, useState, useEffect } from 'react';
import { Card, Buttons, Button, Text } from './styled';
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
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {
    if (color === '#ffffff') {
      setTextColor('#5b5e62');
    }
  }, []);

  return (
    <Card $bg={color} $color={textColor}>
      <Buttons $color={textColor}>
        <Button onClick={() => console.log('кликнуто по эдиту')}>
          <img src={textColor === '#ffffff' ? Edit : EditDark} alt="Edit note" />
        </Button>
        <Button onClick={() => console.log('кликнуто по делиту')}>
          <img src={textColor === '#ffffff' ? Delete : DeleteDark} alt="Delete note" />
        </Button>
      </Buttons>
      <Text> {note} </Text>
    </Card>
  );
};

export default Note;
