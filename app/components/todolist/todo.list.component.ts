import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Todos} from "../../collection/todos";
import {Todo} from "../../model/todo";

@Component({
    selector: 'todo-list',
    templateUrl: 'components/todolist/todo.list.component.html'
})
export class TodoListComponent {

    private todos: Observable<Todo[]>;
    private next: Todo;

    ngOnInit(): void {
        this.initNext();
        this.todos = Todos
            .find({}, {sort: {_id: 1}})
            .zone()
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
            Todos.insert(todo).zone().subscribe(() => {
                this.initNext();
            });
        }
    }

    remove(todo: Todo): void {
        Todos.remove(todo._id);
    }

    private initNext() {
        this.next = {
            title: '',
            description: '',
            done: false
        }
    }
}
