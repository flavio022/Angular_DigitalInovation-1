import { Component, OnInit } from '@angular/core';
import { Course } from './courses';
import { CoursesServices } from './courses.services';
@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CoursesServices) {}
  ngOnInit(): void {
    this.courses = this.courseService.retriveAll();
  }
}
