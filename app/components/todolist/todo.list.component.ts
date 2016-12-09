import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {TodosService} from '../../services/todos.service';

type FilterStatus = 'done' | 'active' | 'all';

@Component({
    selector: 'todo-list',
    templateUrl: 'components/todolist/todo.list.component.html'
})
export class TodoListComponent implements OnInit {

    private next: Todo;
    private filter: FilterStatus;

    constructor(private todosService: TodosService) {
    }

    get todos() {
        return this.todosService.todos;
    }

    ngOnInit(): void {
        this.setFilter('all');
        this.resetNext();
    }

    toggle(todo: Todo): void {
        this.todosService.toggle(todo);
    }

    create(todo: Todo): void {
        this.todosService.create(todo);
        this.resetNext();
    }

    remove(todo: Todo): void {
        this.todosService.remove(todo);
    }

    total(): number {
        return this.todosService.total();
    }

    private resetNext() {
        this.next = {
            title: '',
            description: '',
            done: false
        }
    }

    private setFilter(status: FilterStatus): void {
        this.filter = status;
    }
}
