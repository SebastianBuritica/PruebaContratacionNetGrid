import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private restService: RestService, 
              private  router: Router) { }

  ngOnInit() {
    this.restService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  // sendToForm(){
  //   console.log('Sent to form')
  // }

  deletePost(post: Post) {
    this.restService
    // First we are deleting the task from the server with our service method then we will filter it out
      .deletePost(post)
      // for each task we want where that task.id is not equal to the task.id that we are deleting
      .subscribe(() => (this.posts = this.posts.filter((p) => p.id !== post.id)));
  }

  // addPost(post: Post) {
  //   this.restService.addPost(post).subscribe((post) => this.posts.push(post));
  // }

}