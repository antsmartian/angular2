import {Component, View , Directive, NgIf, NgFor} from 'angular2/angular2';
import {CourseDetailsService} from '../services/course';
import {Card} from './card'

@Component({
    selector: 'dashboard',
    viewBindings: [CourseDetailsService]
})
@View({
    directives: [NgIf, NgFor,Card],
    template: `
    <div class="row">
      <div class="col-md-12" *ng-if="courses.length === 0" style="text-align: center;">
        Loading . . . Please wait
      </div>
      <div class="col-md-4" *ng-for="#course of courses">
        <Card [courseDetails]="course"></Card>
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