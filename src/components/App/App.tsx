import { useEffect } from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../redux/notes/selectors';
import { fetchNotes } from '../../redux/notes/asyncActions';

import GlobalStyles, { Container } from './global';
import { AppStyles, Notes } from './styled';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const { notes } = useSelector(selectNotes);
  console.log(notes);

  return (
    <AppStyles>
      <Header />
      <Container>
        <div style={{ height: '88vh', display: 'flex' }}>
          <AddNote />
          <Notes>
            {notes.map((note) => {
              return <Note key={note.id} id={note.id} note={note.note} color={note.color} />;
            })}
          </Notes>
        </div>
        <Footer />
      </Container>
      <GlobalStyles />
    </AppStyles>
  );
}

export default App;
