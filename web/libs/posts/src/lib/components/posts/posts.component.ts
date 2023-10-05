import { Component, OnInit, inject } from '@angular/core';
import { PostServiceService } from '../../core/services/post/post-service.service';

@Component({
  selector: 'nx-angular-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postService = inject(PostServiceService);

  ngOnInit() {
    this.postService.getAllPosts().subscribe((res) => {
      console.log(res);
    });
  }
}
