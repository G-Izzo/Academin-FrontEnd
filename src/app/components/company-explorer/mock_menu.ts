import { Company } from '../../models/node.model';

export const MOCK_MENU: Company[] = [
  {
    id: 1,
    name: 'IBS',
    courses: [
      { id: 1, name: 'IBS Academy' },
      { id: 2, name: 'Minecraft Building Course - Advanced' },
      { id: 3, name: 'Corso 3' },
    ],
  },
  {
    id: 2,
    name: 'Azienda 2',
    courses: [],
  },
  {
    id: 3,
    name: 'Azienda 3',
    courses: [
      { id: 4, name: 'Corso 1' },
      { id: 5, name: 'Corso 2' },
    ],
  },
  {
    id: 4,
    name: 'Azienda 4',
    courses: [
      { id: 6, name: 'Corso 1' },
      { id: 7, name: 'Corso 2' },
      { id: 8, name: 'Corso 3' },
      { id: 9, name: 'Corso 4' },
    ],
  },
];
