import {enableProdMode} from '@angular/core';
import {LocationStrategy, PathLocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

if (/fluentcards\.com/.test(window.location.host)) {
    enableProdMode();
}

bootstrap(App, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));


// A workaround for a bug in Safari
if (/Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent)) {
    window.addEventListener('popstate', () => {
        window.location.replace(window.location.href);
    });
}
