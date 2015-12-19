import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS,APP_BASE_HREF} from 'angular2/router';

import {App} from './components/app';

bootstrap(App, [ROUTER_PROVIDERS,HTTP_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})
]);