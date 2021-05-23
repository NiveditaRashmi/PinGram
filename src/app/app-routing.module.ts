import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'user/:id', component: SideNavComponent,
    children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      { path: 'posts', component: PostsComponent},
      { path: 'albums', component: AlbumsComponent}
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
