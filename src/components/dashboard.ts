import {Component, View} from 'angular2/core';
import {CourseDetailsService} from '../services/course';
import {NgIf, NgFor} from 'angular2/common'

@Component({
    selector: 'dashboard',
    providers: [CourseDetailsService],
    directives: [NgIf, NgFor],    
    template: `
        <div class="row">
          <div class="col-md-12" *ngIf="courses.length === 0" style="text-align: center;">
            Loading . . . Please wait
          </div>
          <div class="col-md-4" *ngFor="#course of courses">
           
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

    constructor(service: CourseDetailsService) {
        service.load().subscribe(courseDetails => {
            this.courses.push(courseDetails)
        })
    }
}