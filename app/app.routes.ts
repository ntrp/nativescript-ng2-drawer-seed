import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from "nativescript-angular/router";

import {HomeComponent} from './components/home';
import {TodoComponent} from './components/todo';
import {SettingsComponent} from './components/settings';

const routes:RouterConfig = [
    {path: "", redirectTo: "/home", terminal: true},
    {path: "home", component: HomeComponent},
    {path: "todo", component: TodoComponent},
    {path: "settings", component: SettingsComponent},
];

export const APP_ROUTES_PROVIDER = [
    nsProvideRouter(routes, {
        enableTracing: false
    })
]
