import {Component, View} from 'angular2/angular2';

import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Manage} from './manage';

@RouteConfig([
    {path: '/', as: 'Dashboard', component: Dashboard},
    {path: '/Manage', as: 'Manage', component: Manage}
])

@Component({
    selector: 'app'
})
@View({
    directives: [RouterOutlet, RouterLink],
    template: `
  <div>
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Udemy Course Tracker</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#" [router-link]="['/Dashboard']">Dashboard</a></li>
                <li><a [router-link]="['/Manage']">Add/Delete</a></li>
              </ul>
            </div>
          </div>
      </nav>

      <div>
        <router-outlet></router-outlet>
      </div>
  </div>
  `
})
export class App {
}