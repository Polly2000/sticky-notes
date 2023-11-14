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

  const [blockColor, setBlockColor] = useState('#ffffff');
  const [titleColor, setTitleColor] = useState('#5b5e62')
  const dispatch = useAppDispatch();
  const createNote = () => {
    dispatch(addNote({note: 'this is new note', color: '#f5dd29'}))
  }

  useEffect(() => {
    if (blockColor !== '#ffffff') {
      setTitleColor('#ffffff')
    } else {
      setTitleColor('#5b5e62')
    }
  }, [blockColor])

  return (
    <CreateNote bg={blockColor}>
      <Title color={titleColor} >Create Note</Title>
      <Block>
        <Textarea placeholder="Enter your note here"></Textarea>
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
          <SelectColorButton bg={'#ffffff'} onClick={() => setBlockColor('#ffffff') }/>
          <SelectColorButton bg={'#42b883'} onClick={() => setBlockColor('#42b883')}/>
          <SelectColorButton bg={'#64c4ed'} onClick={() => setBlockColor('#64c4ed') }/>
          <SelectColorButton bg={'#fbc'} onClick={() => setBlockColor('#fbc') }/>
          <SelectColorButton bg={'#a2befa'} onClick={() => setBlockColor('#a2befa') }/>
          <SelectColorButton bg={'#ffaf3f'} onClick={() => setBlockColor('#ffaf3f') }/>
          <SelectColorButton bg={'#ef7564'} onClick={() => setBlockColor('#ef7564') }/>
          <SelectColorButton bg={'#cd8de5'} onClick={() => setBlockColor('#cd8de5') }/>
          <SelectColorButton bg={'#c9d1d3'} onClick={() => setBlockColor('#c9d1d3') }/>
          <SelectColorButton bg={'#7bc86c'} onClick={() => setBlockColor('#7bc86c') }/>
          <SelectColorButton bg={'#29cce5'} onClick={() => setBlockColor('#29cce5') }/>
          <SelectColorButton bg={'#ff8ed4'} onClick={() => setBlockColor('#ff8ed4') }/>
        </SelectColorBlock>
        <CreateButton onClick={createNote}>Add new</CreateButton>
      </Block>
    </CreateNote>
  );
};

export default AddNote;
