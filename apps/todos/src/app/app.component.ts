import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from "@nx-angular/data";

@Component({
  selector: 'nx-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http : HttpClient)
  {
    this.fetch();
  }
  fetch() {
    this.http.get<Todo[]>('/api/todos')
    .subscribe((t) => (this.todos = t));
  }

  addTodo()
  {
    this.http.post('/api/addTodo', {})
    .subscribe(() => {
      this.fetch();
    })
  }
}
