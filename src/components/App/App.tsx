import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../redux/notes/selectors';

import GlobalStyles, { Container, AppStyles } from './global';

function App() {
  const notes = useSelector(selectNotes);
  console.log(notes);

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
