import React from 'react';
import { Container } from '../App/global';
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
  return (
    <CreateNote>
      <Title>Create Note</Title>
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
          <SelectColorButton bg={'#42b883 '} />
          <SelectColorButton bg={'#64c4ed'} />
          <SelectColorButton bg={'#fbc'} />
          <SelectColorButton bg={'#a2befa'} />
          <SelectColorButton bg={'#ffaf3f'} />
          <SelectColorButton bg={'#ef7564'} />
          <SelectColorButton bg={'#cd8de5'} />
          <SelectColorButton bg={'#c9d1d3'} />
          <SelectColorButton bg={'#7bc86c'} />
          <SelectColorButton bg={'#29cce5'} />
          <SelectColorButton bg={'#ff8ed4'} />
        </SelectColorBlock>
        <CreateButton>Add new</CreateButton>
      </Block>
    </CreateNote>
  );
};

export default AddNote;
