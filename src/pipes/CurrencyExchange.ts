/**
 * Created by anto_belgin on 30/01/16.
 */
import {Pipe , Inject} from "angular2/core";
import {CurrencyService} from '../services/currency';

@Pipe({
    name : "currencyExchange"
})
export class CurrencyExchange{
    price : number;

    constructor(@Inject (CurrencyService) currencyExchange){
        this.price = currencyExchange.getPrice();
    }

    transform(value){
        return (this.price) * (+value.replace("$",""));
    }
}
