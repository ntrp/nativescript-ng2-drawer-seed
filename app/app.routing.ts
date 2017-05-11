import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {HomePage} from "./pages/home/home.page";
import {TodoPage} from "./pages/todo/todo.page";
import {SettingsPage} from "./pages/settings/settings.page";


const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomePage},
    {path: "todo", component: TodoPage},
    {path: "settings", component: SettingsPage}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}