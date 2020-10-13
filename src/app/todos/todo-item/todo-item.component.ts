import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions  from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;
 public chkCompletado: FormControl;
 public txtInput: FormControl;
 public editando:boolean= false;
  constructor(private Store:Store<AppState>) {

   }

  ngOnInit(): void {
    // this.todo.completado= true;

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(value => {

      this.Store.dispatch(actions.toggle({id:this.todo.id}))
      console.log(value);
    })
  }


  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto)
debugger;
   setTimeout(() => {
    this.txtInputFisico.nativeElement.select();
   }, 1);

  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid){ return;  }
    if(this.txtInput.value == this.todo.texto){
      return;
    }

    this.Store.dispatch(actions.editar({id: this.todo.id,
      texto: this.txtInput.value}))
  }


  borrar(){
    this.Store.dispatch(actions.borrar({id:this.todo.id}));
  }
}
