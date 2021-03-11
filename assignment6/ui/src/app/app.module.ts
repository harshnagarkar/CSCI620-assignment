import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
// import {MatLabelModule} from '@angular/material/'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './components/update/update.component';

import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent,

    // MatLabelModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    AuthModule.forRoot({
      domain: 'hnagarkar.us.auth0.com',
      clientId: 'hRQn9au9ywla5cKLZpSBuYvxVYncn5oz',
      audience: 'https://localhost:3000/payinfo',
      httpInterceptor: {
        allowedList: [`http://localhost:3000/api/*`],
      },

    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
