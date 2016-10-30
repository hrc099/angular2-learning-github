import { Component } from '@angular/core';

import CoursesService from './courses.service';
import AuthorsService from './authors.service';

@Component({
  selector: 'courses',
  template: `<h2>Courses</h2>{{ title }}
  <input type="text" autoGrow/>
  <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
  </ul>`,
  providers: [CoursesService],
})

export class CoursesComponent {
    title = "If you want to learn from the best, try these";
    courses: string[];
    constructor(cS: CoursesService) {
        this.courses = cS.getCourses();
    }
}