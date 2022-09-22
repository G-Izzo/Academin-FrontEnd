import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'filterByQuery',
})
export class FilterByQueryPipe implements PipeTransform {
  transform(students: Student[], query: string): Student[] {
    query = query.toLowerCase();
    console.log(query);

    return students.filter((student) => {
      let studentName = `${student.name} ${student.surname}`.toLowerCase();
      return studentName.includes(query);
    });
  }
}
