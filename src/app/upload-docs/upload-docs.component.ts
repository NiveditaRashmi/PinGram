import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

declare var swal: any;
@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {
  uploadDocForm: FormGroup
  constructor(public formService: FormService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.formService.uploadDoc.next(true)
    this.uploadDocForm = this.fb.group( {
      passport: ['', Validators.required]
    })
  }
  onUpload() {
    swal({
      type:'success',
      title: 'Great!',
      text: 'Your details are submitted successfully!',
      // showCancelButton: true,
      confirmButtonColor: '##880e4f',
      cancelButtonColor:'#fff',
    })
  }
  onFileSelect(event) {

  }
}
