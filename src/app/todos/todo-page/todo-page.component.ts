import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions  from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
completado:boolean = false;

  // private Store:store<AppState>()
  constructor(private Store:Store<AppState>) { }

  ngOnInit(): void {
  }
  toggleAll(){
    this.completado = !this.completado;
   console.log(this.completado);

   this.Store.dispatch(actions.toggleAll({completado: this.completado}))
  }
}
