import React, { useState} from 'react';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import GlobalStyles, { Container } from './global';
import AddNote from './components/AddNote/AddNote';
import Notes from './components/Notes/Notes';
import Header from './components/Header/Header';

const App = () => {

  const {notes} = useAppSelector(state => state.noteReducer);
  const dispatch = useAppDispatch();

  const [noteText, setNoteText] = useState('');

  // handleAction

  return (
    <div>
      <Container>
        <Header />
        {/* <AddNote 
        /> */}
        {/* <hr /> */}
        <ul>
          <Notes />
        </ul>
      </Container>
      <GlobalStyles />
    </div>

  );
}

export default App;
