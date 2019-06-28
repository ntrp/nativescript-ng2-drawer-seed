// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

const NativeWebsocketImpl = require("nativescript-websockets");
require('nativescript-meteor-client')({url: 'http://127.0.0.1:3000', debug: true}, NativeWebsocketImpl);

// TNS prefers Typescript configuration:  module: 'es2015' (in tns-generated file tsconfig.tns.json)
// es2015 performs all imports before any other statement is executed.
// The Meteor and Mongo global variables are instantiated by the command above
// These must be initialized before the AppModule is loaded, therefor the next line is replaced by a require statement
// Not sure whether this has any performance implications.  In my opinion 'nativescript-meteor-client' should be
// adjusted to set the global values on import immediately.
// import {AppModule} from "./app.module";
const AppModule = require('./app.module').AppModule;

import {StatusBar} from "./utils/native";
StatusBar.setColor('#388e3c');

platformNativeScriptDynamic().bootstrapModule(AppModule);
