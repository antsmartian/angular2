import {Component, View , Directive, NgIf, NgFor} from 'angular2/angular2';
import {CourseDetailsService} from '../services/course';

@Component({
    selector: 'dashboard',
    viewBindings: [CourseDetailsService]
})
@View({
    directives: [NgIf, NgFor],
    template: `
    <div class="row">
      <div class="col-md-12" *ng-if="courses.length === 0" style="text-align: center;">
        Loading . . . Please wait
      </div>
      <div class="col-md-4" *ng-for="#course of courses">
        <div style="box-shadow: 10px 10px 5px #888888;width: 400px;height: 150px; background-color : #ebffc6 ; padding: 25px; ">
            <b>{{course.title}}</b>
            <hr >
            {{course.price}}
        </div>
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