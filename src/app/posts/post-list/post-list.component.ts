import { Component, Input } from "@angular/core";

import { Post } from '../post.model';
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content.'},
  //   {title: 'Second Post', content: 'This is the second post\'s content.'},
  //   {title: 'Third Post', content: 'This is the third post\'s content.'},
  // ];
  // posts = [{title: "", content:""}];
  @Input() posts: Post[]= [];
  // postsService: PostsService;

  constructor(public postsService: PostsService) //asks for post service instance.
  {}
}
