export type NoteType = {
  id?: number;
  note: string;
  color: string;
  order?: number | string;
};

export interface IRemoveNote {
  id?: number;
}
