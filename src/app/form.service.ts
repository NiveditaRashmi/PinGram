import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // isLinear = new BehaviorSubject<boolean>(false);
  personalDetails = new BehaviorSubject<boolean>(false);
  addressForm = new BehaviorSubject<boolean>(false);
  // uploadDoc = new BehaviorSubject<boolean>(false);
  constructor() { }
}
