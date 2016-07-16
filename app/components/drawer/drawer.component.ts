import {Component, Input} from '@angular/core';
import {RadSideDrawerComponent} from 'nativescript-telerik-ui/sidedrawer/angular';
import {TNSFontIconPipe} from 'nativescript-ng2-fonticon';

import {NS_ROUTER_DIRECTIVES_EXT} from '../../shared/router/ns-router-ext';

@Component({
    moduleId: module.id,
    selector: 'drawer-content',
    templateUrl: './drawer.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT],
    pipes: [TNSFontIconPipe]
})
export class DrawerComponent {

    @Input() drawerComponent: RadSideDrawerComponent;

    constructor() {

    }
}
