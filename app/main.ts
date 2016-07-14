// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';
// angular2 and nativescript
import {RouterOutletMap} from '@angular/router';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
// telerik UI
import {SIDEDRAWER_PROVIDERS} from 'nativescript-telerik-ui/sidedrawer/angular';
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui/listview/angular';

// app
import {AppComponent} from './app.component';
import {APP_ROUTES_PROVIDER} from './app.routes';

nativeScriptBootstrap(AppComponent, [APP_ROUTES_PROVIDER, NS_ROUTER_PROVIDERS, RouterOutletMap, SIDEDRAWER_PROVIDERS, LISTVIEW_PROVIDERS]);
