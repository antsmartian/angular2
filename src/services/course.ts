import { Inject ,Observable } from 'angular2/angular2';
import { Http ,Headers , HTTP_PROVIDERS } from 'angular2/http';

const URL : string = 'https://www.udemy.com/api-2.0/courses/';
const AUTH : string = 'M1VBWGRRSG9qZkNqMlphQXk5Wmd3TjN5bkVxSm5BeVNWVGhVaTNGajpLOVZRTFVtUXFFem94SzhVQ3pWaWZNdnlYWDNWZ1BZdUhRV01jWmVLdE1HbWd4QURKQTFXQnUyb2piMHhqZTRPdjNPNnF4QkFGVWEzcGVqQWZYTENiQ1FzMHhPTFZhRDR1WDhJRGRXdDJZdW14WXFrV1NPek45MU1qenVCVzdsYg=='
let courses : Array<string> = [URL + '359660/',URL + '520122/'];

export class CourseDetailsService {
    http: Http;
    constructor(@Inject(Http) Http) {
        this.http = Http;
    }

    get() {
        return courses;
    }

    add(course) {
        courses.push(course);
        return this.get();
    }

    remove(course) {
        courses.splice(courses.indexOf(course), 1);
        return this.get();
    }

    httpGet(url) {
        //add HTTP Basic auth
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + AUTH);

        return this.http.get(url,{
            headers : headers
        }).map(res => res)
    }

    load() {
        return Observable.fromArray(courses).concatMap(this.httpGet.bind(this));
    }
}