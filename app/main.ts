// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

const NativeWebsocketImpl = require("nativescript-websockets");
require('nativescript-meteor-client')({url: 'http://127.0.0.1:3000', debug: true}, NativeWebsocketImpl);

import {AppModule} from "./app.module";
import {StatusBar} from "./utils/native";

StatusBar.setColor('#388e3c');

platformNativeScriptDynamic().bootstrapModule(AppModule);
