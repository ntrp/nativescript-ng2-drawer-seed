import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../model/todo';

@Pipe({
    name: 'status',
    pure: false
})
export class StatusPipe implements PipeTransform {
    transform(todos: Todo[], status: string): Todo[] {
        if (status === 'done') {
            return todos.filter(todo => todo.done);
        } else if (status === 'active') {
            return todos.filter(todo => !todo.done);
        }
        return todos;
    }
}