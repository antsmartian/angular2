/**
 * Created by anto_belgin on 30/01/16.
 */
import { Inject, Injectable}  from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class CurrencyService {
    http: Http;
    price : number;

    getPrice() {
        return this.price;
    }

    constructor( @Inject(Http) Http) {
        this.http = Http;
    }

    setCurrencyValue(){
        this.http.get("http://api.fixer.io/latest?base=USD")
            .map(res => res.json())
            .subscribe(data => {
                this.price = +data.rates.INR;
            });
    }
}