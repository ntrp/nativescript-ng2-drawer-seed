import {Location} from "@angular/common";

export class Page {

    constructor(private _location: Location) {
    }

    goBack(): void {
        this._location.back();
    }
}