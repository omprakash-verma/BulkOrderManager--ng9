import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Division1Component } from './order/division1/division1.component';
import { Division2Component } from './order/division2/division2.component';
import { Divison3Component } from './order/divison3/divison3.component';

@NgModule({
  declarations: [
    AppComponent,
    Division1Component,
    Division2Component,
    Divison3Component,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
