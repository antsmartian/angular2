import {Component, View} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';

@Component({
    selector: 'app'
})
@View({
    directives: [RouterOutlet, RouterLink],
    template: `
       <h1>Hello World</h1>
  `
})
export class App {
}