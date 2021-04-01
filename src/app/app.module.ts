import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgNocopyModule} from 'ng-nocopy';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgNocopyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
