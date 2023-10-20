import React from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';

import GlobalStyles, { Container, AppStyles } from './global';
import './App.css';

function App() {
  return (
    <AppStyles>
      <Header />
      <Container>
        <AddNote />
        <Note color={'#7bc86c'} note={'test'} />
      </Container>
      <GlobalStyles />
    </AppStyles>
  );
}

export default App;
