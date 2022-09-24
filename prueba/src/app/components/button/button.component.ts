import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // We declare our input and output properties so that we can use them in the template
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // We wont add the functionality in here because we want this button to be reusable and if we used it on 
  // a different component we would want the button to do something different, so we will bring an event emitter
  // and we will output the event
  onClick() {
    this.btnClick.emit();
  }
}