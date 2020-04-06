import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService} from '../data.service';

@Component({
selector: 'app-count-down-timer',
templateUrl: './count-down-timer.component.html',
styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

constructor(private data: DataService) {  }
message;
public limit;
event;
counter;

ngOnInit() {
  this.data.currentMessage.subscribe(message => {
    if (!!message) {
      this.message = message;
      if (this.message.limiter) {
      this.limit = this.message.limiter;
      } else {
        this.limit = this.counter;
      }
      this.event = this.message.eventTriggered;
    }
    this.myFunction();
  });
}

myFunction() {
  const timerLimit = setInterval(() => {
    if (!!this.message && this.limit > 0) {
    if (this.event === 'Start/Pause') {
        this.limit = this.limit - 1 ;
        this.counter = this.limit;
      }
    if (this.event === 'Start') {
        this.limit = this.limit - 1 ;
        this.counter = this.limit;
      }
    if (this.event === 'Pause') {
      clearInterval(timerLimit);
      this.limit = this.counter;
    }
    if (this.event === 'Reset') {
      this.limit = 0;
      clearInterval(timerLimit);
    }
    if (this.limit === 0) {
      document.querySelector('.btn.btn-primary').innerHTML = 'Start/Pause';
      }
  } else {
    clearInterval(timerLimit);
  }
}, 1000);

  }
}

