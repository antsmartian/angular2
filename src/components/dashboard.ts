import {Component, View , Directive } from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common'
import {CourseDetailsService} from '../services/course';
import {Card} from './card'

@Component({
    selector: 'dashboard',
    providers: [CourseDetailsService]
})
@View({
    directives: [NgIf, NgFor,Card],
    template: `
    <div class="row">
      <div class="col-md-12" *ngIf="courses.length === 0" style="text-align: center;">
        Loading . . . Please wait
      </div>
      <div class="col-md-4" *ngFor="#course of courses">
        <Card [course]="course"></Card>
        <br />
      </div>
    </div>
  `
})
export class Dashboard {
    courses: Array<Object> = [];
    courseDetails: Array<string>;

    constructor(service: CourseDetailsService) {
        this.courseDetails = service.get();

        service.load().subscribe(courseDetails => {
            courseDetails = courseDetails.json();
            this.courses.push(courseDetails);
            console.log(this.courses)
        })
    }
}