import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {
  timeStamp;
  flag = true;
  constructor(private info: DataService) { }

  ngOnInit(): void {
      if (this.flag === true) {
      this.flag = false;
      this.info.currentMessage.subscribe(message => {
          console.log('hiiiiii', message, this.flag);
          this.timeStamp = message;
          if ( !!this.timeStamp && this.timeStamp.eventTriggered === 'Start/Pause' || this.timeStamp.eventTriggered === 'Start') {
            document.querySelector('.time-stamp').innerHTML += 'Started at ' + new Date() + '<br>';
          } else if (!!this.timeStamp && this.timeStamp.eventTriggered === 'Pause' ) {
            document.querySelector('.time-stamp').innerHTML += 'Paused at ' + new Date() + '<br>';
          } else if (!!this.timeStamp && this.timeStamp.eventTriggered === 'Reset') {
            document.querySelector('.time-stamp').innerHTML += 'Reset at ' + new Date() + '<br>';
          }
        });
      }
    }
  }
