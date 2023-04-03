import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { fetchNotes } from '../../store/slices/NoteSlice';
import { Cards } from './styled';
import Note from '../Note/Note';

const Notes = () => {

  const {notes, isLoading, error} = useAppSelector(state => state.noteReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch, notes]);

  return (
    <div>
      {isLoading && <h2>{isLoading}</h2>}
      <Cards>
        {notes && notes.map((note: any) => (
          <Cards key={note.id}>
            <Note id={note.id} note={note.note} color={note.color} />
          </Cards>
        ))}
      </Cards>
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default Notes;