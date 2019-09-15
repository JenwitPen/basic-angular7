import { Pipe1Pipe } from './Pipes/pipe1.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{BsDropdownModule}from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Com1Component } from './component/home/_com1/_com1.component';
import { Com2Component } from './component/home/_com2/_com2.component';
import { Directive1Directive } from './directive/directive1/directive1.directive';
import { Directive2Directive } from './directive/directive2/directive2.directive';
import { Pipe2Pipe } from './Pipes/pipe2.pipe';
import {CheckinService} from './service/checkin.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidateDirective } from './directive/validate.directive';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DataComponent } from './component/data/data.component';
import { NavbarComponent } from './shareds/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Directive1Directive,
    Directive2Directive,
    Pipe1Pipe,
    Pipe2Pipe,
    ValidateDirective,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
   BsDropdownModule.forRoot()
  ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
