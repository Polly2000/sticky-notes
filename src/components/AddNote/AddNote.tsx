import React, { useState, useEffect } from 'react';
import { Container } from '../App/global';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { addNote } from '../../redux/notes/asyncActions';

import {
  CreateNote,
  Title,
  Block,
  Textarea,
  SelectColorBlock,
  SelectColorButton,
  CreateButton,
} from './styled';

const AddNote = () => {
  const [noteColor, setNoteColor] = useState<string>('#ffffff');
  const [noteText, setNoteText] = useState<string>('');
  const [textIsWhite, setTextIsWhite] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const createNote = () => {
    setNoteText('');
    setNoteColor('#ffffff');
    dispatch(addNote({ note: noteText, color: noteColor }));
  };

  useEffect(() => {
    if (noteColor === '#ffffff') {
      setTextIsWhite(false);
    } else {
      setTextIsWhite(true);
    }
  }, [noteColor]);

  return (
    <CreateNote $bg={noteColor}>
      <Title $color={textIsWhite}>Create Note</Title>
      <Block>
        <Textarea
          placeholder="Enter your note here.."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <SelectColorBlock>
          {/* пастельные цвета */}
          {/* <SelectColorButton bg={'#c9d1d3'} />
          <SelectColorButton bg={'#42b883'} />
          <SelectColorButton bg={'#64c4ed'} />
          <SelectColorButton bg={'#fbc'} />
          <SelectColorButton bg={'#b6e6bd'} />
          <SelectColorButton bg={'#fed6bc'} />
          <SelectColorButton bg={'#a2befa'} />
          <SelectColorButton bg={'#ff6464'} />
          <SelectColorButton bg={''} />
          <SelectColorButton bg={''} />
          <SelectColorButton bg={''} /> */}

          {/* простые цвета */}
          {/* <SelectColorButton bg={'#7bc86c'} />
          <SelectColorButton bg={'#29cce5'} />
          <SelectColorButton bg={'#ffaf3f'} />
          <SelectColorButton bg={'#ef7564'} />
          <SelectColorButton bg={'#cd8de5'} />
          <SelectColorButton bg={'#172b4d'} />
          <SelectColorButton bg={'#ff8ed4'} />
          <SelectColorButton bg={'#64C4ED'} />
          <SelectColorButton bg={'#a2befa'} />
          <SelectColorButton bg={'#42B883'} />
          <SelectColorButton bg={''} /> */}

          {/* финальные цвета  */}
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
        <CreateButton onClick={createNote}>Add new</CreateButton>
      </Block>
    </CreateNote>
  );
};

export default AddNote;
