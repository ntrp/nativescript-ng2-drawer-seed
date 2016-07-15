import {Component, ChangeDetectorRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {NS_ROUTER_DIRECTIVES_EXT} from '../../shared/router/ns-router-ext';
import {PageComponent} from '../page.component';
import {DrawerComponent} from '../drawer/drawer.component';

@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: './settings.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT, DrawerComponent]
})
export class SettingsComponent extends PageComponent {

    constructor(protected changeDetectionRef:ChangeDetectorRef, protected router:Router, protected location:Location) {
        super(changeDetectionRef, router, location);
    }
}
