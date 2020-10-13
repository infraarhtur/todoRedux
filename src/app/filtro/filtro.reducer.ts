import { createReducer, on } from '@ngrx/store';
import {  setFiltro , filtrosValiddos} from './filtro.action';

export const initialState:filtrosValiddos ='todos' ;

const _filtroReducer = createReducer(initialState,
   on(setFiltro, (state,{filtro}) => filtro),
);

export function filtroReducer(state,action){

  return _filtroReducer(state,action);
}
