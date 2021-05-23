import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebRequestService } from '../web-request.service';

declare var swal: any;
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  newPostCreated = false;
  @Input() id;
  val;

  constructor(public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private webService: WebRequestService) { }


  ngOnInit(): void {
    console.log(this.data, "djfkdjf")
    this.val = this.data
  }


  onEditPost(form: NgForm) {
    // this will prevent empty form from submitting
    if(form.invalid) {
      return;
    }
    let data = {
      userId : this.val.userId,
      title: this.val.title,
      body: this.val.body
    }
    console.log("val value",this.val)
    console.log("dkjf", form)

    this.webService.updatePost(this.val.id, this.val).subscribe(res => {
      console.log(res, "done")
      swal({
        type:'success',
        title: 'Congrats!',
        text: 'Post was updated successfully!',
        showCancelButton: true,
        confirmButtonColor: 'rgb(37, 143, 37)',
        cancelButtonColor:'#fff',
      })
      this.dialogRef.close();
    })
  }

}
