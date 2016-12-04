import {Component} from "@angular/core";
import {MongoObservable} from "meteor-rxjs";

const Events = new MongoObservable.Collection("events");

@Component({
    selector: 'todo-list',
    template: `
    <StackLayout orientation="vertical" *ngFor="let todo of todos | async" class="todo-item">
        <Label [text]="todo.title" fontSize="20"></Label>
        <Label [text]="todo.description" fontSize="10"></Label>
    </StackLayout>
    `
})
export class TodoListComponent {

    /*
    private todos:{}[] = [
        {title: 'title1', description: 'text1'},
        {title: 'title2', description: 'text2'}
    ];
    */
    private todos:any;

    ngOnInit(): void {

        this.todos = Events
            .find({})
            .zone()

    }
}
