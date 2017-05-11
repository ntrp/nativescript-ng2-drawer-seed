import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {TNSFontIconModule} from "nativescript-ng2-fonticon";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {TodosService} from "./services/todos.service";
import {HomePage} from "./pages/home/home.page";
import {SettingsPage} from "./pages/settings/settings.page";
import {TodoPage} from "./pages/todo/todo.page";
import {DrawerComponent} from "./components/drawer/drawer.component";
import {TodoListComponent} from "./components/todolist/todo.list.component";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {StatusPipe} from "./pipes/status.pipe";
import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";
import {NativeScriptFormsModule} from "nativescript-angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        HomePage,
        SettingsPage,
        TodoPage,
        DrawerComponent,
        TodoListComponent,
        CheckboxComponent,
        StatusPipe
    ],
    providers: [
        TodosService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
