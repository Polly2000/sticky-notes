import React from 'react';
import { Container } from '../App/global';
import { CreateNote, Title, Block, Textarea, SelectColorBlock, CreateButton } from './styled';

const AddNote = () => {
  return (
    <CreateNote>
      <Title>Create Note</Title>
      <Block>
        <Textarea placeholder="Enter your note here"></Textarea>
        <SelectColorBlock>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </SelectColorBlock>
        <CreateButton>Add new</CreateButton>
      </Block>
    </CreateNote>
  );
};

export default AddNote;
