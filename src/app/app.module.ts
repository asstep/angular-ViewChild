import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentFirstComponent } from './parent-component/child-component-first/child-component-first.component';
import { ChildComponentSecondComponent } from './parent-component/child-component-second/child-component-second.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentFirstComponent,
    ChildComponentSecondComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
