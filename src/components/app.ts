import {Component, View} from 'angular2/core';

@Component({
    selector: 'app',
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
        <center>Here goes content</center>
      </div>
  </div>
  `
})
export class App {
}