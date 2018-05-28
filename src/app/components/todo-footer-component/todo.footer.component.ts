import {Component} from '@angular/core';
import {Todo} from '../../todo';
import {TodoDataService} from '../../todo-data.service';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo.footer.component.html',
})
export class TodoFooterComponent {

  constructor(private todoDataService: TodoDataService) {
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}