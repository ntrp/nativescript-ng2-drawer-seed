import {Component, ChangeDetectorRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'drawer-content',
    templateUrl: 'drawer.component.html',
    directives: [NS_ROUTER_DIRECTIVES]
})
export class DrawerComponent {

    constructor(protected changeDetectionRef:ChangeDetectorRef, protected router:Router, protected location:Location) {
    }
}
