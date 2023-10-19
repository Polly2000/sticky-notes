import React from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';

import GlobalStyles, { Container } from './global';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <AddNote />
      </Container>
      <GlobalStyles />
    </div>
  );
}

export default App;
