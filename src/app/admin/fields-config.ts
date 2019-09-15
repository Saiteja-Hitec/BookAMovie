import { FieldConfig, Mode } from '../shared/models/field-config';

export const fieldConfigs: FieldConfig[] = [
  {
    name: 'tid',
    type: 'text',
    placeholder: 'Theater ID',
    mode: Mode.EDIT
  },
  {
    name: 'name',
    type: 'text',
    placeholder: 'Theater Name',
    mode: Mode.EDIT
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'City',
    mode: Mode.EDIT
  },
  {
    name: 'gLocation',
    type: 'text',
    placeholder: 'G-Location path',
    mode: Mode.EDIT
  },
  {
    name: 'capacity',
    type: 'number',
    placeholder: 'capacity',
    mode: Mode.EDIT
  }
];
