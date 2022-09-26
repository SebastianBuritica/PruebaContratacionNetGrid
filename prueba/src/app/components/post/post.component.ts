import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onDelete(post) {
    this.onDeletePost.emit(post);
    alert('Post deleted successfully')
  }

  onEdit(post) {
    this.router.navigate(['/edit', post.id]);
  }

}
