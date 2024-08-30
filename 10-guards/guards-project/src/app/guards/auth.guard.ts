import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const hasToken = !!localStorage.getItem('token')

  return hasToken
};
