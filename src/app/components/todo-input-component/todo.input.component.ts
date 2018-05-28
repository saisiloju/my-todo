import {Component} from '@angular/core';
import {Todo} from '../../todo';
import {TodoDataService} from '../../todo-data.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo.input.component.html',
  styleUrls: ['./todo.input.component.css']
})
export class TodoInputComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
}