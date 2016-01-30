import {Component , Input,ViewEncapsulation} from 'angular2/core';
import {CurrencyExchange} from '../pipes/CurrencyExchange'

@Component({
    selector: 'Card',
    pipes : [CurrencyExchange],
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
        {{course.price  | currencyExchange | currency:'INR':true }}
    </div>
`
})
export class Card {
	@Input() course : Object;
}