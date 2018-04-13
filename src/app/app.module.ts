import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {PostListComponent} from './component/post-list.component';
import {PostComponent} from './component/post.component';
import {Post} from './component/post';
import {PostService} from './service/post.service';

@NgModule({
  declarations: [
    AppComponent,PostComponent,PostListComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
