/**
 * Created by anto_belgin on 10/12/15.
 */
import {Component, View, NgIf, NgClass} from 'angular2/angular2';

@Component({
    selector: 'card',
    properties: ['course: courseDetails']
})
@View({
    directives: [NgIf, NgClass],
    template: `
    <div style="box-shadow: 10px 10px 5px #888888;width: 400px;height: 150px; background-color : #ebffc6 ; padding: 25px; ">
        <b>{{course.title}}</b>
        <hr >
        {{course.price}}
    </div>
`
})
export class Card {
}
