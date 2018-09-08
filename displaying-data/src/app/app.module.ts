import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItComponent } from './it/it.component';
import { It2Component } from './it2/it2.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ItComponent,
    It2Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
