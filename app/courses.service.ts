import { Injectable } from '@angular/core';

@Injectable()
export default class CoursesService {
    getCourses() {
        return ["HTML & CSS", "Javascript", "AngularJS", "Angular 2"];
    }
}