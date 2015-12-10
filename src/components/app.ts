import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: `
  <div>
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Udemy Course Tracker</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Dashboard</a></li>
               <li><a>Add/Delete</a></li>
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