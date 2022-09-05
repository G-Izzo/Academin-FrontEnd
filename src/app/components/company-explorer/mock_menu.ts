import { Company } from '../../models/node.model';

export const MOCK_MENU: Company[] = [
  {
    id: 1,
    name: 'IBS',
    courses: [
      { id: 1, name: 'IBS Academy', starting_date:new Date("2020-08-20"), ending_date:new Date("2020-10-21")},
      { id: 2, name: 'Minecraft Building Course', starting_date:new Date("2020-10-20"), ending_date:new Date("2021-03-21") },
      { id: 3, name: 'Corso 3', starting_date:new Date("2022-06-20"), ending_date:new Date("2022-10-21") },
    ],
  },
  {
    id: 2,
    name: 'Azienda 2',
  },
  {
    id: 3,
    name: 'Azienda 3',
    courses: [
      { id: 4, name: 'Corso 1', starting_date:new Date("2022-08-20"), ending_date:new Date("2022-12-21") },
      { id: 5, name: 'Corso 2', starting_date:new Date("2023-01-20"), ending_date:new Date("2023-14-21") },
    ],
  },
  {
    id: 4,
    name: 'Azienda 4',
    courses: [
      { id: 6, name: 'Corso 1', starting_date:new Date("2020-02-20"), ending_date:new Date("2020-10-21") },
      { id: 7, name: 'Corso 2', starting_date:new Date("2021-11-20"), ending_date:new Date("2022-03-21") },
      { id: 8, name: 'Corso 3', starting_date:new Date("2022-02-20"), ending_date:new Date("2020-07-21") },
      { id: 9, name: 'Corso 4', starting_date:new Date("2023-08-20"), ending_date:new Date("2023-10-21") },
    ],
  },
];
