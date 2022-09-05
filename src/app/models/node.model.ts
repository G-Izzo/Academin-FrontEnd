import { Lesson } from "./lessons.model";

export interface Company {
  id: number;
  name: string;
  courses?: Course[];
}

export interface Course {
  id: number;
  name: string;
  starting_date: Date;
  ending_date: Date;
  lessons?:Lesson[];
}
