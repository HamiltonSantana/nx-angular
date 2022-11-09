import { Component, Input } from '@angular/core';
import { Todo } from '@nx-angular/data';

@Component({
  selector: 'nx-angular-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent  {
  @Input() todos: Todo[] = []
}
