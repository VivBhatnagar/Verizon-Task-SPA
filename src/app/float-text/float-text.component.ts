import { Component, OnInit, OnChanges } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-float-text',
  templateUrl: './float-text.component.html',
  styleUrls: ['./float-text.component.css'],
  animations : [
trigger('floatText', [
  state('normal', style({
    transform: 'translateX(0px)'})),
  state('floating', style({
      transform: 'translateX(1340px)'})),
  transition('normal => floating' , animate(3000)),
    ])
    ]
  })
export class FloatTextComponent implements OnInit {
  state = 'normal';
  constructor() {
    }
  ngOnInit(): void {
  }
  myAnimator() {
    this.state === 'normal' ? this.state = 'floating' : this.state = 'normal';
  }
}
