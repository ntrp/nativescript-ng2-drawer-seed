import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES_EXT} from './shared/router/ns-router-ext';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT]
})
export class AppComponent {

}
