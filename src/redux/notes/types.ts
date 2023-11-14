import { NoteType } from '../note/types';

export type NotesType = {
  notes: NoteType[];
  statusFetchNotes: Status;
  statusAddNote: Status;
  statusEditNote: Status;
  statusRemoveNote: Status;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
