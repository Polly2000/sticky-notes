import React, {ChangeEvent, useState, FC} from 'react';
import { IAddNote } from '../../models/IAddNote';

const AddNote: FC<IAddNote> = ({ value, updateNote, handleAction}) => {

  return (
    <div>
      <input 
        type="text" 
        name="note" 
        placeholder="note"
        value={value}
        onChange={(e) => updateNote(e.target.value)}
      />
      <button onClick={handleAction}>add new note</button>
    </div>
  );
};

export default AddNote;