import { NgModule, OnChanges } from '@angular/core';
import { Routes, RouterModule, Data } from '@angular/router';
import { FloatTextComponent } from './float-text/float-text.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { ResultsComponent } from './results/results.component';
import { DataService } from './data.service';

const routes: Routes = [
  {path: '' , component: CountDownTimerComponent },
  {path: 'floatingbanner' , component: FloatTextComponent},
  {path: 'results' , component: ResultsComponent , }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DataService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
