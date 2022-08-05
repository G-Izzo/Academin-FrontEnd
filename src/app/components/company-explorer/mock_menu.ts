import { SideMenuNode } from './SideMenuNode.interface';

export const MOCK_MENU: SideMenuNode[] = [
  {
    name: 'Azienda 1',
    children: [
      { id: 1, name: 'Corso 1' },
      { id: 2, name: 'Corso 2' },
      { id: 3, name: 'Corso 3' },
    ],
  },
  {
    name: 'Azienda 2',
  },
  {
    name: 'Azienda 3',
    children: [
      { id: 4, name: 'Corso 1' },
      { id: 5, name: 'Corso 2' },
    ],
  },
  {
    name: 'Azienda 4',
    children: [
      { id: 6, name: 'Corso 1' },
      { id: 7, name: 'Corso 2' },
      { id: 8, name: 'Corso 3' },
      { id: 9, name: 'Corso 4' },
    ],
  },
];
