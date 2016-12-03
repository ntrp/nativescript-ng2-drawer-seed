import {Component, ChangeDetectorRef} from "@angular/core";
import {DrawerPage} from "../drawer.page";

@Component({
    selector: 'home-page',
    templateUrl: 'pages/home/home.page.html',
})
export class HomePage extends DrawerPage {

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}
