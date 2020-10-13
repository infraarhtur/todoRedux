import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
//ngrx
import { StoreModule } from '@ngrx/store';

//dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todos/todo.reducer';
import { environment } from '../environments/environment';
import {appReducers } from './app.reducer';
import { Todo } from './todos/models/todo.model';
import { filtroReducer } from './filtro/filtro.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,

    StoreModule.forRoot(appReducers,{
        runtimeChecks:{
          strictActionImmutability:false,
          strictStateImmutability:false
        }
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

