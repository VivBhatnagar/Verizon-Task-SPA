import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { TimerConfigComponent } from './timer-config/timer-config.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TrackerComponent } from './tracker/tracker.component';
import { DataService } from '../data.service';


@NgModule({
  declarations: [TimerConfigComponent, TimestampComponent, TrackerComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [DataService],
  exports: [TimerConfigComponent, TimestampComponent, TrackerComponent],
  entryComponents: [TimerConfigComponent]
})
export class CountDownTimerModule { }
