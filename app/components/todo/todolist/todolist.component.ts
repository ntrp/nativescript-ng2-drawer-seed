import {Component} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
    selector: 'todo-list',
    template: `
    <StackLayout orientation="vertical" *ngFor="let todo of todos" class="todo-item">
        <Label [text]="todo.title" fontSize="20"></Label>
        <Label [text]="todo.text" fontSize="10"></Label>
    </StackLayout>
    `
})
export class TodoListComponent {

    private todos:Todo[] = [{title: 'title1', text: 'text1'}, {title: 'title2', text: 'text2'}];
}
