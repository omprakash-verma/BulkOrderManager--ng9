import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Division1Component } from './order/division1/division1.component';
import { Division2Component } from './order/division2/division2.component';

@NgModule({
  declarations: [AppComponent, Division1Component, Division2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
