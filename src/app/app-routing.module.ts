import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//guarding
import { AngularFireAuthGuard,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';
//Pages
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']); 

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
},
{
  path:'signin',
  component:SigninComponent,
},
{
  path:'signup',
  component:SignupComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectLoggedInToHome}
},
{
  path:'**',
  component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
