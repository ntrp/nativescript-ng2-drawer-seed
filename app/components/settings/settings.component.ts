import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {NS_ROUTER_DIRECTIVES_EXT} from '../../shared/router/ns-router-ext';

@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: './settings.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT]
})
export class SettingsComponent {

    constructor(protected router:Router, protected location:Location) {
    }

    goBack() {
        this.location.back();
    }
}
