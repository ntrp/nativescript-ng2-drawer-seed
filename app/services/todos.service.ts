import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';

@Injectable()
export class TodosService {

    todos: Todo[];

    constructor() {
        this.todos = [];
    }

    toggle(todo: Todo): void {
        todo.done = !todo.done;
    }

    create(todo: Todo): void {
        this.todos.push(todo);
    }

    remove(todo: Todo): void {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    total(): number {
        return this.todos.length;
    }
}
