import {Component, View} from 'angular2/core';
import {CourseDetailsService} from '../services/course';

@Component({
    selector: 'dashboard',
    providers: [CourseDetailsService],
    template: `
        <center>Rendering dashboard </center>
    `
})
export class Dashboard {
    constructor(service: CourseDetailsService) {
        service.load().subscribe(courseDetails => {
            courseDetails = courseDetails;
            console.log(courseDetails)
        })
    }
}