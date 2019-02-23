import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AceTabComponent} from './old/ace-tab.component';
import {DataSource} from './data-source';
import {CategoryFilterPipe} from './old/category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AceTabComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
