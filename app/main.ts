// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

require('nativescript-ng2-meteor/dist/meteor/index')({
    url: 'http://vdc.nerdpol.ovh:3000'
});

import {AppModule} from "./app.module";
import {StatusBar} from "./utils/native";

StatusBar.setColor('#388e3c');

platformNativeScriptDynamic().bootstrapModule(AppModule);
