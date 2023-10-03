import { Component, OnInit } from '@angular/core';
import { PostsService } from './core/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((res)=>{
      console.log(res);
      
    })
  }
}
