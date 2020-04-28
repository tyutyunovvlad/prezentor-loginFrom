import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { NgForm } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { LoginFormComponent } from './login-form.component';




@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
