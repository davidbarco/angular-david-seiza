import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLayoutComponent } from './shared/components/nav-layout/nav-layout.component';
import { UserIsLoggedIn, UserNotLoggedIn } from './shared/guards/guards.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [UserNotLoggedIn],
    loadChildren: () => import('./views/sessions/sessions.module').then((m) => m.SessionsModule),
  },
  {
    path: 'app',
    canActivate: [UserIsLoggedIn],
    component: NavLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/nav/nav.module').then((m) => m.NavModule),

      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
