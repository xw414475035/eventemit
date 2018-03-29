import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';

import { EventListener } from '@angular/core/src/debug/debug_node';
import { MycomponentComponent } from './mycomponent.component';



@NgModule({
  declarations: [
    AppComponent,

    MycomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 
}
