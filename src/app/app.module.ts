import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { TabComponentComponent } from './shared/components/tab-component/tab-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    TabComponentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
