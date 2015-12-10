import {bootstrap,provide} from 'angular2/angular2';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './components/app';

bootstrap(App, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);