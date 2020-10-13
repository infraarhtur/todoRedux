import { props } from '@ngrx/store';
import{createAction} from '@ngrx/store'

export type filtrosValiddos= 'todos' | 'completados'|'pendientes';

export const setFiltro =
 createAction('[Filtro] set filtro', props<{filtro: filtrosValiddos}>());


