import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; //angular forms

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent
{
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) //checks whether input is valid or not.
  {
    if(form.invalid)
    {
      return;
    }
    // console.dir(postInput);
    // this.newPost = this.enteredValue;
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);// this passes the post as argument.
  }
}
