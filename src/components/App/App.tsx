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
  const { notes, statusFetchNotes, statusAddNote } = useSelector(selectNotes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  useEffect(() => {
    if (statusAddNote === 'success') {
      dispatch(fetchNotes());
    }
  }, [statusAddNote])

  return (
    <AppStyles>
      <Header />
      <Container>
        <div style={{ height: '88vh', display: 'flex' }}>
          <AddNote />
          <Notes>
            {statusFetchNotes === 'loading' && <h4>Loading...</h4>}
            {statusFetchNotes === 'success' && notes.map((note) => {
              return <Note key={note.id} id={note.id} note={note.note} color={note.color} />;
            })}
            {statusFetchNotes === 'error' && <h4>Oops, something went wrong :с The request from the backend was not received</h4>}
          </Notes>
        </div>
        <Footer />
      </Container>
      <GlobalStyles />
    </AppStyles>
  );
}

export default App;
