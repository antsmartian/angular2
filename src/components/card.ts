/**
 * Created by anto_belgin on 10/12/15.
 */
import {Component, View , Input} from 'angular2/core';

@Component({
    selector: 'Card',
    properties: ['course: course']
})
@View({
    template: `
    <div style="box-shadow: 10px 10px 5px #888888;width: 400px;height: 150px; background-color : #ebffc6 ; padding: 25px; ">
        <b>{{course.title}}</b>
        <hr >
        {{course.price}}
    </div>
`
})
export class Card {
	//@Input() course : Object;
}
