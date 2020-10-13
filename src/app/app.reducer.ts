import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValiddos } from './filtro/filtro.action';


export interface AppState{
  todos:Todo[] ,
  filtro:filtrosValiddos

}


  // filtro:filtroReducer
export const appReducers:ActionReducerMap<AppState>={
  todos:todoReducer,
  filtro:filtroReducer

}
