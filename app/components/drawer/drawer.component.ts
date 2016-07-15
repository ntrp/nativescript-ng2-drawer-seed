import {Component, Input} from '@angular/core';
import {RadSideDrawerComponent} from 'nativescript-telerik-ui/sidedrawer/angular';

import {NS_ROUTER_DIRECTIVES_EXT} from '../../shared/router/ns-router-ext';

@Component({
    moduleId: module.id,
    selector: 'drawer-content',
    templateUrl: './drawer.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT]
})
export class DrawerComponent {

    @Input() drawerComponent: RadSideDrawerComponent;

    constructor() {

    }
}
