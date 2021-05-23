import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EditPostComponent } from '../../edit-post/edit-post.component';
import { Post } from '../post.model';
import { WebRequestService } from '../../web-request.service';

declare var swal: any;
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  posts: Post[] = [];
  @Input() id;
  postId;
  private postsSub: Subscription;
  // postService: PostsService;
  constructor(private webService: WebRequestService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    console.log("ddddd", this.id)
    this.getAllPosts(this.id);
    console.log("post", this.posts)
  }



  getAllPosts(id) {
    this.webService.getPosts(id).subscribe((res)=> {
      console.log(res);
      this.posts = res;
    });

  }

 openDialog(post) {
  const dialogRef = this.dialog.open(EditPostComponent, {
    width: '65%',
    data: post
  });
  dialogRef.afterClosed().subscribe(res => console.log("after close", res));
}

deletePost(postId) {
  alert("are you sure?");
  this.webService.deletePost(postId).subscribe((res) => {
    swal({
      title: 'Deleted Successfully',
      text: "You won't be able to revert this!",
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Go Back'
  })
  this.posts = this.posts.filter(a => a.id != postId);
  })


}
}
