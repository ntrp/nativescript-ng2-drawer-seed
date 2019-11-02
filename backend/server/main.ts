import {Todos} from '../collection/todos';
declare const  Meteor: any; // removes annoying startup warning

Meteor.startup(() => {
    Todos.remove({});

    Todos.insert({
        title: 'Go buy groceries',
        description: 'we need milk',
        done: false
    });

    Todos.insert({
        title: 'Write to Alex',
        description: 'ask about the meeting',
        done: true
    });

    Todos.insert({
        title: 'Call Mom',
        description: 'ask about the meeting',
        done: false
    });
});