import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { addNote } from './store/slices/NoteSlice';
import GlobalStyles, { Container } from './global';
import { fetchNotes } from './store/slices/NoteSlice';
import AddNote from './components/AddNote/AddNote';
import Notes from './components/Notes/Notes';
import Header from './components/Header/Header';

const App = () => {

  const dispatch = useAppDispatch();

  const [noteText, setNoteText] = useState('');
  const handleAction = () => {
    if (noteText.trim().length) {
      dispatch(addNote({id: 1, note: noteText, color: '#7bc86c'}));
      setNoteText('');
    }
  }

  return (
    <div>
      <Container>
        <Header />
        <AddNote
          value={noteText}
          updateNote={setNoteText}
          handleAction={handleAction}
        />
        <ul>
          <Notes />
        </ul>
      </Container>
      <GlobalStyles />
    </div>

  );
}

export default App;
