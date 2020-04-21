import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import {AppRouting} from './app-routing';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDi7-il0COKzcrYMhuDYoodanERnjenvwY'
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
