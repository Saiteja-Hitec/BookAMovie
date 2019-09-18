export interface FieldConfig {
  placeholder: string;
  type: string;
  mode: Mode;
  name: string;
}

export enum Mode {
  VIEW = 1,
  EDIT = 2
}

export enum FieldTypes {
    INPUT = 'input',
    SELECT = 'select'
}
