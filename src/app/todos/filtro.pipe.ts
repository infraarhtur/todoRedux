import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValiddos } from '../filtro/filtro.action';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValiddos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo=> todo.completado)

        case 'pendientes':
          return todos.filter(todo=> !todo.completado)
      default:
        return todos;
    }

  }

}
