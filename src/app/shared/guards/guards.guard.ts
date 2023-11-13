import { CanActivateFn, Router } from '@angular/router';
import { AutService } from '../services/aut.service';
import { inject } from '@angular/core';

export const UserIsLoggedIn: CanActivateFn = () => {
  const urlLogin = inject(Router).createUrlTree(['/signin']);
  const refresh_token: any = localStorage.getItem('refresh_token');

  if (refresh_token) {
    return true;
  } else {
    return urlLogin;
  }
};


export const UserNotLoggedIn: CanActivateFn = () => {
  const urlDashboard = inject(Router).createUrlTree(['/app/dashboard']);
  const refresh_token: any = localStorage.getItem('refresh_token');

  if (refresh_token) {
    return urlDashboard;
  } else {
    return true;
  }
};



