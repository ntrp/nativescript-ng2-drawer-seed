import {MongoObservable} from "meteor-rxjs";
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todos} from '../../collection/todos';
import {Todo} from '../../model/todo';
import {KeyboardType} from "tns-core-modules/ui/enums";
import number = KeyboardType.number;

type FilterStatus = 'done' | 'active' | 'all';

@Component({
    selector: 'todo-list',
    templateUrl: './todo.list.component.html'
})
export class TodoListComponent implements OnInit {

    private todos: Observable<Todo[]>;
    private next: Todo;
    private filter: FilterStatus;

    ngOnInit(): void {
        this.setFilter('all');
        this.initNext();
        this.todos = Todos.find({}, {sort: {_id: 1}});
    }

    toggle(todo: Todo): void {
        Todos.update(todo._id, {
            $set: {
                done: !todo.done
            }
        })
    }

    create(todo: Todo): void {
        if (todo.title) {
            Todos.insert(todo).subscribe(() => {
                this.initNext();
            });
        }
    }

    remove(todo: Todo): void {
        Todos.remove(todo._id);
    }

    total(): number {
        return Todos.find().cursor.count();
    }

    private initNext() {
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