import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {
    constructor(private http: HttpClient) { }

    getAllPosts(){
        return this.http.get('./api/v1/posts')
    }
    
}