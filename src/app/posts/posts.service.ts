import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[]=[];

  getPosts(){
    return [...this.posts];//it pulls out the elements in posts and returns it as new array
  }

  addPost(title: string, content: string)//dependency injection
  {
    const post: Post = {title: title,content: content};
    this.posts.push(post);
  }
}
