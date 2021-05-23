import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  id;
  photos = []
  constructor(private router: ActivatedRoute, private webService: WebRequestService) { }

  ngOnInit(): void {
    this.id = this.router.parent.snapshot.paramMap.get('id');
    this.getAllPhotos(this.id);
  }

  getAllPhotos(id) {
    this.webService.getAllPhotos(this.id).subscribe((res) => this.photos = res);
  }



}
