import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionSigninComponent } from './session-signin/session-signin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SessionSigninComponent,
    title: 'Inicio de sesión'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
