import { Component, OnInit } from '@angular/core';
import { Course } from './courses';
@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular:Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.999,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.4,
        releaseDate: 'December,2,2019'
      },

      {
        id: 1,
        name: 'Angular:Http',
        imageUrl: '/assets/images/cli.png',
        price: 45.999,
        code: 'LKL-10956',
        duration: 80,
        rating: 5.4,
        releaseDate: 'December,2,2020'
      }
    ];
  }
}
