import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  selectedIndex = 0;
  isLinear=true;
  personalDetails;
  addressForm;
  uploadDoc;
  constructor(public formService: FormService) {

   }

  ngOnInit(): void {
    this.formService.personalDetails.subscribe(
      (res) => this.personalDetails = res
    );
    this.formService.addressForm.subscribe(
      (res) => this.addressForm = res
    );
    // this.formService.uploadDoc.subscribe(
    //   (res) => this.uploadDoc = res
    // )
  }

}
