import { ActivatedRoute } from '@angular/router';
import { MOCK_STUDENTS } from './../../mock data/mock_students';
import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-output',
  templateUrl: './search-output.component.html',
  styleUrls: ['./search-output.component.css'],
})
export class SearchOutputComponent implements OnInit {
  matchingStudents: Student[] = MOCK_STUDENTS;
  query: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('query') ?? '';
    });
  }
}
