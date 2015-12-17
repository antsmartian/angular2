import {Component, View} from 'angular2/core';
import {NgFor,FORM_PROVIDERS, FORM_DIRECTIVES, FormBuilder} from 'angular2/common';

import {CourseDetailsService} from '../services/course';

@Component({
    selector: 'manage',
    viewBindings: [FORM_PROVIDERS, CourseDetailsService]
})
@View({
    directives: [NgFor, FORM_DIRECTIVES],
    template: `
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <form [ngFormModel]="trackerForm" style="margin-bottom: 5px;" (submit)="add()">
        <input ngControl="courseId" class="form-control" type="text" placeholder="Add Course Link" />
      </form>
      <table class="table-bordered" style="width: 100%;">
        <tbody>
          <tr *ngFor="#course of courses">
            <td>{{course}}</td>
            <td style="padding-top: 6px;">
              <button class="btn btn-danger" (click)="remove(course)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`
})
export class Manage {
    courses:Array<string>;
    service:CourseDetailsService;
    trackerForm:any;

    constructor(service:CourseDetailsService) {
        this.service = service;
        this.courses = service.get();

        let builder = new FormBuilder();
        this.trackerForm = builder.group({
            courseId: ['']
        })
    }

    add() {
        this.courses.push(this.trackerForm.value.courseId.toLowerCase());
    }

    remove(courseId) {
        this.courses = this.service.remove(courseId);
    }
}
