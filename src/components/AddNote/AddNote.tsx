import React from 'react';
import { Container } from '../App/global';
import { CreateNote, CreateNoteTitle } from './styled';

const AddNote = () => {
  return (
    <CreateNote>
      <CreateNoteTitle>Create Note</CreateNoteTitle>
      <button>Add new note</button>
    </CreateNote>
  );
};

export default AddNote;