import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
const moment = _moment; 

@Component({
  selector: 'app-course-registry',
  templateUrl: './course-registry.component.html',
  styleUrls: ['./course-registry.component.css']
})
export class CourseRegistryComponent implements OnInit {

  currentDate = moment().toDate()
  constructor() { }

  ngOnInit(): void {
  }

}
