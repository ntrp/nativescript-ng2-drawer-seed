import {SettingsPage} from "./pages/settings/settings.page";
import {TodoPage} from "./pages/todo/todo.page";
import {HomePage} from "./pages/home/home.page";

export const APP_ROUTES = [
    {path: "", redirectTo: "/home", pathMatch: 'full'},
    {path: "home", component: HomePage},
    {path: "todo", component: TodoPage},
    {path: "settings", component: SettingsPage}
];
