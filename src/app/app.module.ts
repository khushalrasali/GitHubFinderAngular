import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Firebase
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
//Form and HTTP client
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
//encivroment
import {environment} from "./../environments/environment";
//Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UsercardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
