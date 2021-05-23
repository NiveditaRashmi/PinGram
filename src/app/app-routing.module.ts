import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'user/:id', component: SideNavComponent,
    children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      // { path: 'dashboard', component: DashboardComponent},
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
