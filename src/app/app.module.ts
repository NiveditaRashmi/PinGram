import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    PostsComponent,
    AlbumsComponent,
    PostCreateComponent,
    PostListComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MglTimelineModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule

  ],
  providers: [LoginService,
  WebRequestService
],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
