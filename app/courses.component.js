"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var courses_service_1 = require('./courses.service');
var CoursesComponent = (function () {
    function CoursesComponent(cS) {
        this.title = "If you want to learn from the best, try these";
        this.courses = cS.getCourses();
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "<h2>Courses</h2>{{ title }}\n  <input type=\"text\" autoGrow/>\n  <ul>\n    <li *ngFor=\"let course of courses\">{{ course }}</li>\n  </ul>",
            providers: [courses_service_1.default],
        }), 
        __metadata('design:paramtypes', [courses_service_1.default])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map