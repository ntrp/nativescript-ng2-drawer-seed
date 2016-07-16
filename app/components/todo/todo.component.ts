import {Component, ChangeDetectorRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {NS_ROUTER_DIRECTIVES_EXT} from '../../shared/router/ns-router-ext';
import {PageComponent} from '../page.component';
import {DrawerComponent} from '../drawer/drawer.component';
import {TNSFontIconPipe} from 'nativescript-ng2-fonticon';
import {TodoListComponent} from './todolist/todolist.component';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: './todo.component.html',
    directives: [NS_ROUTER_DIRECTIVES_EXT, DrawerComponent, TodoListComponent],
    pipes: [TNSFontIconPipe]
})
export class TodoComponent extends PageComponent {

    constructor(protected changeDetectionRef:ChangeDetectorRef,
                protected router:Router,
                protected location:Location) {
        super(changeDetectionRef, router, location);
    }
}
