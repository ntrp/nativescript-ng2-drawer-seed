import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import {Color} from 'tns-core-modules/color';

const android = application.android;

export class StatusBar {

    static setColor(hexcode: string):void {

        if (android) {
            android.on(application.AndroidApplication.activityCreatedEvent, () => {

                if (platform.device.sdkVersion >= '21') {
                    let window = application.android.startActivity.getWindow();
                    window.setStatusBarColor(new Color(hexcode).android);
                }
            });
        }
    }
}