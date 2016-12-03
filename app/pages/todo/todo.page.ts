import {Component, ChangeDetectorRef} from "@angular/core";
import {DrawerPage} from "../drawer.page";

@Component({
    selector: 'todo-page',
    templateUrl: 'pages/todo/todo.page.html',
})
export class TodoPage extends DrawerPage {

    constructor(private changeDetectorRef:ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}
