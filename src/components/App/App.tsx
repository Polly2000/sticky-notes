import React from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';

import GlobalStyles, { Container, AppStyles } from './global';

function App() {
  return (
    <AppStyles>
      <Header />
      <Container>
        <div style={{ height: '88vh' }}>
          <AddNote />
          {/* <Note color={'#7bc86c'} note={'test'} /> */}
        </div>
        <Footer />
      </Container>
      <GlobalStyles />
    </AppStyles>
  );
}

export default App;
