import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.action';
import { filtrosValiddos } from '../../filtro/filtro.action';
import {  limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValiddos = 'todos';
  filtros: actions.filtrosValiddos[] = ['todos', 'pendientes', 'completados'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => {
    //   this.filtroActual = filtro;
    //   })

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }
  cambiarFiltro(filtro: actions.filtrosValiddos) {
    this.store.dispatch(actions.setFiltro({ filtro: filtro }));
  }

  limpiarTodo(){
    this.store.dispatch(limpiarTodos())
  }

}
