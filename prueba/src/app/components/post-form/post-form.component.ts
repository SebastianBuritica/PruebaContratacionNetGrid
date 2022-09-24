import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/Post'
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  // alert: boolean = false;
  title: string;
  body: string;
  post: {}
  posts: Post[] = [];

  constructor(private restService: RestService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(post: {title: string, body: string}) {
    if(!this.title) {
      alert('Please add a title');
      return
    } 
    if(!this.body) {
      alert('Please add a description');
      return
    }
    console.log(post)
    this.restService.addPost(post).subscribe((post) => this.posts.push(post));

    alert('Information entered successfully')
    this.router.navigate(['/private']);
    // const newPost: Post = {
    //   title: this.title,
    //   body: this.body
    // }
    //   // addNewPost(post: Post) {
    //   //   this.restService.addPost(this.post)
    //   //     .subscribe((post) => {
    //   //       this.posts.push(post);
    //   //  }
    //   //       res => {
    //   //         console.log(res);
    //   //         localStorage.setItem('token', res.token);
    //   //         this.router.navigate(['/private']);
    //   //       },
    //   //       err => console.log(err)
    //   //     )
    //   // }
    //   alert('Information entered successfully')
      
    //   this.onAddPost.emit(newPost);

    //   this.title = '';
    //   this.body = '';
       
    
    // this.alert = true;
    // const newPost: Post = {
    //   title: this.title,
    //   body: this.body
    // }

    // this.onAddPost.emit(newPost);

    // this.title = '';
    // this.body = '';
  }

  


  
}
