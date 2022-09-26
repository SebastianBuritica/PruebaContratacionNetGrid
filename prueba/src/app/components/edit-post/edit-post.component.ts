import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post'
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  posts: Post[] = [];
  Post: Post

  constructor(private restService: RestService,
    private router: Router) { }

  ngOnInit():void {
  }

  updatePost(post: Post) {
    this.restService.updatePost(this.Post).subscribe(() => {
      alert("Successfully updated!");
      this.router.navigate(["/private"]);
    });
  }

}
