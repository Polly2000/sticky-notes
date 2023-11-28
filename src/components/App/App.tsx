import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/error/selectors';
import { setIsError } from '../../redux/error/slice';
import { selectNotes } from '../../redux/notes/selectors';
import { fetchNotes } from '../../redux/notes/asyncActions';

import GlobalStyles, { Container } from './global';
import { Notes, Error, ErrorElem, BottomBlock, ErrorButton, Bin } from './styled';

function App() {
  const dispatch = useAppDispatch();
  const { isError } = useSelector(selectError);
  const { notes, statusFetchNotes, statusAddNote, statusEditNote, statusRemoveNote } =
    useSelector(selectNotes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  useEffect(() => {
    if (
      statusAddNote === 'success' ||
      statusEditNote === 'success' ||
      statusRemoveNote === 'success'
    ) {
      dispatch(fetchNotes());
    }
  }, [statusAddNote, statusEditNote, statusRemoveNote]);

  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
              width: '100%',
            }}>
            {<AddNote />}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                gap: '10px',
              }}>
              <Notes>
                {statusFetchNotes === 'loading' && <h4>Loading...</h4>}
                {statusFetchNotes === 'success' &&
                  notes.map((note) => {
                    return <Note key={note.id} id={note.id} note={note.note} color={note.color} />;
                  })}
                {statusFetchNotes === 'error' && (
                  <h4>
                    Oops, something went wrong :с The request from the backend was not received
                  </h4>
                )}
              </Notes>
              <Bin>bin zone</Bin>
            </div>
          </div>
        </div>
        <BottomBlock>
          {isError && (
            <Container>
              <Error>
                <div></div>
                <ErrorElem>
                  <p>This is error message</p>
                  <ErrorButton onClick={() => dispatch(setIsError(false))}>close</ErrorButton>
                </ErrorElem>
              </Error>
            </Container>
          )}
          <Footer />
        </BottomBlock>
      </Container>
      <GlobalStyles />
    </div>
  );
}

export default App;
