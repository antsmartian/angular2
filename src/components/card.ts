import {Component , Input,ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'Card',
    styles : [ `
        .carBox {
            box-shadow: 10px 10px 5px #888888;
            width: 400px;
            height: 150px; 
            background-color : #ebffc6 ; 
            padding: 25px; 
        }
    `],
    encapsulation: ViewEncapsulation.Emulated,
    template: `
    <div class="carBox">
        <b>{{course.title}}</b>
        <hr >
        {{course.price}}
    </div>
`
})
export class Card {
	@Input() course : Object;
}