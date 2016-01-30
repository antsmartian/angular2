import {Component, View} from 'angular2/core';
import {CourseDetailsService} from '../services/course';
import {CurrencyService} from '../services/currency'
import {NgIf, NgFor} from 'angular2/common'
import {Card} from './card'

@Component({
  selector: 'dashboard',
  providers: [CourseDetailsService,CurrencyService],
  directives: [NgIf, NgFor, Card],
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

  constructor(service: CourseDetailsService, currencyService : CurrencyService) {
    service.load().subscribe(courseDetails => {
      this.courses.push(courseDetails)
    });

    currencyService.setCurrencyValue();
  }
}