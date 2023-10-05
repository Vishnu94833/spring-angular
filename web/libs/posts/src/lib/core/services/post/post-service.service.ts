import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  readonly http = inject(HttpClient)

  /**
   * getAllPosts
   */
  public getAllPosts() {
    return this.http.get('./api/v1/posts')
  }

}
