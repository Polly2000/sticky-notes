import { NoteType } from '../note/types';

export type NotesType = {
  notes: NoteType[];
  status: Status;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
