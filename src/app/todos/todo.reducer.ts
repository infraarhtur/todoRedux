import { createReducer, on, props } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll ,limpiarTodos} from './todo.actions';

export const estadoInicial:Todo[] =[
   new Todo('salvar al mundo'),
   new Todo('pasear a toby'),
   new Todo('limpiar la cocina'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(limpiarTodos, (state) => state.filter(todo => !todo.completado)),
  on(crear, (state,{texto}) => [...state, new Todo(texto)]),
  on(toggle, (state,{id}) =>{



    return state.map(todo => {

      if(todo.id == id){
        return{
          ...todo,
          completado: ! todo.completado
        }
      }else{
        return todo;
      }

    });
  } ),


  on(editar, (state,props) =>{
    return state.map(todo => {

      if(todo.id == props.id){
        return{
          ...todo,
       texto:props.texto
        }
      }else{
        return todo;
      }

    });
  } ),

  on( borrar, (state,{id}) =>state.filter(todo=> todo.id !== id) ),
  on(toggleAll,(state,props)=>
     state.map(todo => {
      return {
        ...todo,
      completado: !todo.completado
      }
    })
  )

  );








export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
