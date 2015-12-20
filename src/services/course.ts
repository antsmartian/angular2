import { Inject, Injectable}  from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';

const URL: string = 'https://www.udemy.com/api-2.0/courses/';
const AUTH: string = 'M1VBWGRRSG9qZkNqMlphQXk5Wmd3TjN5bkVxSm5BeVNWVGhVaTNGajpLOVZRTFVtUXFFem94SzhVQ3pWaWZNdnlYWDNWZ1BZdUhRV01jWmVLdE1HbWd4QURKQTFXQnUyb2piMHhqZTRPdjNPNnF4QkFGVWEzcGVqQWZYTENiQ1FzMHhPTFZhRDR1WDhJRGRXdDJZdW14WXFrV1NPek45MU1qenVCVzdsYg=='
let courses: Array<string> = [URL + '359660/', URL + '520122/'];

@Injectable()
export class CourseDetailsService {
    http: Http;
    constructor( @Inject(Http) Http) {
        this.http = Http;
    }

    get() {
        return courses;
    }

    httpGet(url) {
        //add  HTTP asic auth
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + AUTH);

        return this.http.get(url, {
            headers: headers
        }).map(res => res.json())
    }

    load() {
        return Observable.fromArray(courses).concatMap(this.httpGet.bind(this));
    }
}