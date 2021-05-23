import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],

})
export class SideNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  user;
  id;
  userdetails;
  nothingClicked = true;
  isLoggedIn : boolean = false;
  userName;

  constructor(private breakpointObserver: BreakpointObserver,
    private router: ActivatedRoute, private webService: WebRequestService
    ) {

    }


  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    console.log("id is ", this.id);
    this.webService.getUserById(this.id).subscribe(
      (res) => {
        this.userdetails = res;
        this.userName = res.name;
        console.log("abhid", this.userdetails)
      }

    )
      console.log("dfjs", this.userdetails)
  }



}
