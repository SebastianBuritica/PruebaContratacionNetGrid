import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  // alert: boolean = false;
  title: string;
  body: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm() {
    if(!this.title) {
      alert('Please add a title');
      return
    }
    // this.alert = true;
    const newPost = {
      title: this.title,
      body: this.body
    }


    this.title = '';
    this.body = '';
  }

  


  closeAlert() {
    // this.alert = false;
    console.log('n')
  }
}
