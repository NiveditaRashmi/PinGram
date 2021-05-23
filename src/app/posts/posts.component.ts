import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  createPost = false;
  constructor(private router: ActivatedRoute) { }
  id;
  ngOnInit(): void {
    this.id= this.router.parent.snapshot.paramMap.get('id');
  }

}
