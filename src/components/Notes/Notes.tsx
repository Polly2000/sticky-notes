import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../hooks/redux';
import Note from '../Note/Note';
import { Cards } from './styled';

const Notes = () => {

  const {notes} = useAppSelector(state => state.noteReducer);

  // fake data
  const hotes = [
    {id: 1, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation tempor incididunt ut labore et.", color: "#7bc86c"},
    {id: 2, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#29cce5"},
    {id: 3, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#cd8de5"},
    {id: 4, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#ffaf3f"},
    {id: 5, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#ef7564"},
    {id: 6, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#a2befa"},
    {id: 7, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#42B883"},
    {id: 8, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#172b4d"},
    {id: 9, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#ef7564"},
    {id: 10, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#64C4ED"},
    {id: 11, note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", color: "#ff8ed4"},

  ]

  return (
    <div>
      <Cards>
        {hotes.map((note: any) => (
          <Cards key={note.id}>
            <Note id={note.id} note={note.note} color={note.color} />
          </Cards>
        ))}
      </Cards>
    </div>
  );
};

export default Notes;