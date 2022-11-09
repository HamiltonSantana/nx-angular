import { Injectable } from '@nestjs/common';
import { Todo } from '@nx-angular/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 100)}`,
    });
  }
}
