export interface IAddNote {
  value: string;
  updateNote: (str: string) => void;
  handleAction: () => void;
}