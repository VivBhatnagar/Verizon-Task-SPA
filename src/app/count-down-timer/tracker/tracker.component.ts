import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  eventCatch;
  startCount = 0;
  pauseCount = 0;
  constructor(private track: DataService) { }

  ngOnInit(): void {
    this.track.currentMessage.subscribe((message) => {
      this.eventCatch = message;
      if (this.eventCatch.eventTriggered === 'Pause'){
        ++this.pauseCount;
      } else if (this.eventCatch.eventTriggered === 'Start/Pause' || this.eventCatch.eventTriggered === 'Start') {
        ++this.startCount;
      }
    });
  }

}
