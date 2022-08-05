import { Course } from './course.model';

export interface Company {
  id: number;
  name: string;
  courses?: Course[];
}
