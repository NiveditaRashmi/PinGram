import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebRequestService } from '../../web-request.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPostCreated = false;
  enteredContent = '';
  enteredTitle = '';
  @Input() id;
  val={};
  // output turns it into an event that can be listended from outside
  // @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {

  }
  constructor(private webService: WebRequestService) { }

  onAddPost(form: NgForm) {
    // this will prevent empty form from submitting
    if(form.invalid) {
      return;
    }
    this.val = {
      userId: this.id,
      title: form.value.title,
      body: form.value.body
    }
    console.log("dkjf", form.value.body)
    this.webService.addPost(this.id, this.val).subscribe(res =>console.log(res));
    this.newPostCreated = true;
    // form.resetForm();
  }
}
