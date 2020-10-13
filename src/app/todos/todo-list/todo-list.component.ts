import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { FormControl } from '@angular/forms';
import { filtrosValiddos } from '../../filtro/filtro.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = [new Todo('ejemplo')];
filtroActual :filtrosValiddos;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(
    //   todos=> this.todos= todos
    // );

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }

}
