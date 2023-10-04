import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { postsRoutes } from './lib.routes';
import { PostComponent } from './components/posts/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(postsRoutes)],
  declarations: [PostsComponent, PostComponent],
})
export class PostsModule {}
