import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL ;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://jsonplaceholder.typicode.com/users';

   }

   getUsers(): Observable<any> {
     return this.http.get(this.ROOT_URL);
   }

   getUserById(id):Observable<any> {
     return this.http.get(this.ROOT_URL+'/'+id);
   }

   getPosts(id): Observable<any> {
     return this.http.get(this.ROOT_URL+'/'+id+'/posts');
   }

   addPost(id, val): Observable<any> {
     return this.http.post(this.ROOT_URL+'/'+id+'/posts', val);
   }

   updatePost(id, val): Observable<any> {
     return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id, val);
   }

   getAllPhotos(id): Observable<any> {
     return this.http.get(this.ROOT_URL+'/album'+id+'/photos');
   }

   deletePost(id):Observable<any> {
     return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
   }

}
