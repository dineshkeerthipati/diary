import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements OnInit, CanActivate, OnDestroy {
  subScription: Subscription;
  letUserIn = false;
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.letUserIn;
    this.subScription = this.authService.letUserInSubject.subscribe((data) => {
      this.letUserIn = data;
    });
    console.log('letUserIn', this.letUserIn);
    return this.letUserIn;
  }

  ngOnInit(): void {
    /*this.subScription = this.authService.letUserInSubject.subscribe((data) => {
      this.letUserIn = data;
    });*/
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }
}
