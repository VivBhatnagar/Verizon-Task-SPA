import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountDownTimerModule } from './count-down-timer/count-down-timer.module';
import { DataService } from './data.service';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { FloatTextComponent } from './float-text/float-text.component';
import { FloatTextModule } from './float-text/float-text.module';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    FloatTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountDownTimerModule,
    FloatTextModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
