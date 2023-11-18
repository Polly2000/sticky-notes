import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/error/selectors';
import { setIsError } from '../../redux/error/slice';
import { setNotes } from '../../redux/notes/slice';
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

  // const dragOver = (e: any) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  // };

  // const dropNote = (e: any) => {
  //   e.target.style.left = `${e.pageX - 50}px`;
  //   e.target.style.top = `${e.pageY - 50}px`;
  // };

  //drag&drop
  const [currentNote, setCurrentNote] = useState<any | any>(null);
  const dragStartHandler = (e: any, data: any) => {
    console.log('drag', data);
    setCurrentNote(data);
    e.target.style.border = '1px solid #525252';
    e.target.style.borderRadius = '5px';
  };

  const dragEndHandler = (e: any) => {
    e.target.style.border = 'none';
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const dropHandler = (e: any, data: any) => {
    console.log('drop', data);
    e.preventDefault();
    dispatch(
      setNotes(
        notes.map((note: any) => {
          if (note.id === data.id) {
            return { ...note, order: currentNote.order };
          }
          if (note.id === currentNote.id) {
            return { ...note, order: data.order };
          }
          return note;
        }),
      ),
    );
  };

  const sortNotes = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const sortedNotes = notes.concat().sort(sortNotes);

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
            <AddNote />
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
                  sortedNotes.sort(sortNotes).map((note) => {
                    return (
                      <Note
                        key={note.id}
                        id={note.id}
                        note={note.note}
                        color={note.color}
                        data={note}
                        dragStartHandler={dragStartHandler}
                        dragEndHandler={dragEndHandler}
                        dragOverHandler={dragOverHandler}
                        dropHandler={dropHandler}
                      />
                    );
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
