import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Page} from "../page";

@Component({
    selector: 'settings-page',
    templateUrl: 'pages/settings/settings.page.html'
})
export class SettingsPage extends Page {

    constructor(private location: Location) {
        super(location);
    }
}
