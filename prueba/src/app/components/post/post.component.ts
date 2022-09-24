import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeleteTask: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

}
