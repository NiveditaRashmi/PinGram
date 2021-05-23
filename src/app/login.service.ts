import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webService: WebRequestService) {

   }

   isValid: boolean = false;
   id =0;
   arr = [false, 0];
   check(value) {
    this.webService.getUsers().subscribe((res) => {
      let users = res;
      console.log(res);
      console.log("value", value);
      for(let user of users) {
        if(value.name == user.name && value.email == user.email && value.password === user.phone) {
          this.arr[0] = true;
          this.arr[1] = user.id;

        }
      }
      // this.isValid = false;
    });
    // console.log(this.arr)
    return this.arr;
   }

}
