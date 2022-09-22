import { Lesson } from '../models/lessons.model';
import { Exam } from '../models/exam.model';

export const MOCK_LESSON: Lesson[] = [
  {
    id: 1,
    date: new Date("9/22/2022"),
    topics: "HTML, CSS",
    students:[]      
  },
  {
    id: 2,
    date: new Date("8/11/2022"),
    topics: "Introduzione Angular e Typescript",
    students:[]
  },
  {
    id: 3,
    date: new Date("6/12/2022"),
    topics: "Introduzione Java e Springboot",
    students:[]
  },
];

export const MOCK_EXAM: Exam[] = [
    {
        id: 1,
        name: "HTML, CSS, JS",
        URL: "sample_url"
    },
    {
        id: 2,
        name: "Angular",
        URL: "sample_url2"
    },
    {
        id: 3,
        name: "Springboot",
        URL: "sample_url3"
    },
]