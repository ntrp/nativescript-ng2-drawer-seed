// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';
// angular2 and nativescript
import {RouterOutletMap} from '@angular/router';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
// telerik UI
import {SIDEDRAWER_PROVIDERS} from 'nativescript-telerik-ui/sidedrawer/angular';
import {TNSFontIconService} from 'nativescript-ng2-fonticon';

// app
import {AppComponent} from './app.component';
import {APP_ROUTES_PROVIDER} from './app.routes';

import * as native from './utils/native';

native.StatusBar.setColor('#388e3c');

var DDPClient = require('nativescript-meteor');

var ddpclient = new DDPClient({
    host: "localhost",
    port: 3000,
    ssl: false,
    autoReconnect: true,
    autoReconnectTimer: 15000,
    maintainCollections: true,
    ddpVersion: '1',
    useSockJs: true
});

ddpclient.connect(function (error, wasReconnect) {
    if (error) {
        console.log('DDP connection error!');
        return;
    }

    if (wasReconnect) {
        console.log('Reestablishment of a connection.');
    }

    console.log('connected!');

    // SUBSCRIBE COLLECTIONS
    ddpclient.subscribe(
        'todos',                  // name of Meteor Publish function to subscribe to
        [],                       // any parameters used by the Publish function
        function () {             // callback when the subscription is complete
            console.log('posts complete:');
            console.log(ddpclient.collections.todos);
            for (var _id in ddpclient.collections.todos) {
                var todos = ddpclient.collections.todos[_id];
                console.log("Adding available todos " + _id + " name: " + todos.judul);
            }
        });
});
/*
*/

nativeScriptBootstrap(
    AppComponent,
    [
        APP_ROUTES_PROVIDER,
        NS_ROUTER_PROVIDERS,
        RouterOutletMap,
        SIDEDRAWER_PROVIDERS,
        {
            provide: TNSFontIconService,
            useFactory: () => {
                return new TNSFontIconService({
                    'fa': 'fonts/font-awesome.css'
                });
            }
        }
    ],
    {
        "cssFile": "app.style.css"
    }
);
