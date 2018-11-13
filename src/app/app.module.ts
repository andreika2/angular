import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {RouterModule, Routes} from "@angular/router"

const appRouter : Routes = [

  {
    path : "",
    component : LoginFormComponent
  },
  {
    path : "adminpage",
    component : AdminpageComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    AdminpageComponent
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
