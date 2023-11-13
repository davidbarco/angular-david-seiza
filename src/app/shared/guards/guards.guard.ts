import { CanActivateFn, Router } from '@angular/router';
import { AutService } from '../services/aut.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const UserIsLoggedIn: CanActivateFn = () => {

  const urlLogin = inject(Router).createUrlTree(['/signin']);
  const refresh_token: any = localStorage.getItem('refresh_token');
  if(refresh_token){
    return inject(AutService).renewAccessToken(refresh_token)
    .pipe(map(isLogin => isLogin || urlLogin));
  }else{
    return urlLogin
  }
};


export const UserNotLoggedIn: CanActivateFn = () => {
  const urlDashboard = inject(Router).createUrlTree(['/app/dashboard']);
  const refresh_token: any = localStorage.getItem('refresh_token');

  if(refresh_token){
    return inject(AutService).renewAccessToken(refresh_token)
    .pipe(
      map(isLogin => isLogin ? urlDashboard : true)
      )
  }else{
    return true
  }
};



