import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {strictEqual} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  letUserIn = false;
  letUserInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.letUserIn);
  constructor() { }

  setLetUserIn(val: boolean) {
    this.letUserIn = val;
    this.letUserInSubject.next(this.letUserIn);
  }

  getLetUerIn() {
    return this.letUserIn;
  }
}
