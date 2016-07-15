import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES_EXT} from './shared/router/ns-router-ext';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
        <page-router-outlet></page-router-outlet>
    `,
    directives: [NS_ROUTER_DIRECTIVES_EXT]
})
export class AppComponent {

}
