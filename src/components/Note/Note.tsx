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
  const [textIsWhite, setTextIsWhite] = useState<boolean>(false);

  useEffect(() => {
    if (color === '#ffffff') {
      setTextIsWhite(false);
    } else {
      setTextIsWhite(true);
    }
  }, []);

  return (
    <Card $bg={color} $color={textIsWhite}>
      <Buttons $color={textIsWhite}>
        <Button onClick={() => console.log('кликнуто по эдиту')}>
          <img src={textIsWhite ? Edit : EditDark} alt="Edit note" />
        </Button>
        <Button onClick={() => console.log('кликнуто по делиту')}>
          <img src={textIsWhite ? Delete : DeleteDark} alt="Delete note" />
        </Button>
      </Buttons>
      <Text> {note} </Text>
    </Card>
  );
};

export default Note;
