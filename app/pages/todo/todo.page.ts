import {Component, ChangeDetectorRef} from "@angular/core";
import {DrawerPage} from "../drawer.page";

@Component({
    selector: 'todo-page',
    templateUrl: './todo.page.html',
})
export class TodoPage extends DrawerPage {

    constructor(private changeDetectorRef:ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}
