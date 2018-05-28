import {Component} from '@angular/core';
import {TodoDataService} from '../../todo-data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html',
})
export class TodoListComponent {

  constructor(private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}