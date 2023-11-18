export type NoteType = {
  id?: number;
  note: string;
  color: string;
  order?: number;
};

export interface IRemoveNote {
  id?: number;
}
