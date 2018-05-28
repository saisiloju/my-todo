import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OverlayModule } from "angular-io-overlay";

import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input-component/todo.input.component';
import { TodoListComponent } from './components/todo-list-component/todo.list.component';
import { TodoFooterComponent } from './components/todo-footer-component/todo.footer.component';

import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OverlayModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
