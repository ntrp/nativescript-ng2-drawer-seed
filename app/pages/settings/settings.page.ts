import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Page} from "../page";

@Component({
    selector: 'settings-page',
    templateUrl: './settings.page.html'
})
export class SettingsPage extends Page {

    constructor(private location: Location) {
        super(location);
    }
}
