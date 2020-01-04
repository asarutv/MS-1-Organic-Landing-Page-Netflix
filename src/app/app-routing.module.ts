import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/akal/landing/landing.component';
import { LoginComponent } from './components/membership/login/login.component';


const routes: Routes = [
  {path : 'landing', component: LandingComponent},
  {path : 'login', component: LoginComponent},

  {path: '', redirectTo : '/landing', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
