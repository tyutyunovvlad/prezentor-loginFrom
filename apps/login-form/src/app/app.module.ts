import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginFormModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
