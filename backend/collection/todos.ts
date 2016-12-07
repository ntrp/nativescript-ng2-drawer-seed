import {MongoObservable} from "meteor-rxjs";
import {Todo} from "../model/todo";

export const Todos = new MongoObservable.Collection<Todo>('todos');