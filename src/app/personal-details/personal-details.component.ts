import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  personalDetailForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    fathersName: [null, Validators.required],
    mothersName: null,
    college: [null, Validators.required],
    skills: [null, Validators.required],

    gender: ['male', Validators.required]
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder, public formService: FormService) {}

  onSubmit() {
    if(this.personalDetailForm.valid) {
      this.formService.personalDetails.next(true);
    }
  }
}
