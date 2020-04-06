import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-timer-config',
  templateUrl: './timer-config.component.html',
  styleUrls: ['./timer-config.component.css']
})
export class TimerConfigComponent implements OnInit {
  public timerValue;
  details;
  constructor(private data: DataService) {
  }
  ngOnInit() {
  }

  newEventClick(event) {
    if (event.target.className === 'btn btn-primary' ) {
      if (event.target.innerText === 'Start/Pause') {
        if (!!this.timerValue) {
          this.data.changeMessage({limiter: this.timerValue, eventTriggered: event.target.innerText});
          event.target.innerText =  'Pause';
        }
      } else if (event.target.innerText === 'Start') {
        if (!!this.timerValue) {
          this.data.changeMessage({eventTriggered: event.target.innerText});
          event.target.innerText =  'Pause';
        }
      } else if (event.target.innerText === 'Pause') {
        this.data.changeMessage({eventTriggered: event.target.innerText});
        event.target.innerText = 'Start';
      }
    } else {
      this.data.changeMessage({limiter: '', eventTriggered: event.target.innerText});
      document.querySelector('.btn.btn-primary').innerHTML = 'Start/Pause';
      this.timerValue = '';
    }
  }
}

