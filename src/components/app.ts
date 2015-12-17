import {Component, View} from 'angular2/core';

//import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';

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
    directives: [ROUTER_DIRECTIVES],
    template: `
  <div>
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Udemy Course Tracker</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#" [routerLink]="['/Dashboard']">Dashboard</a></li>
                <li><a [routerLink]="['/Manage']">Add/Delete</a></li>
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