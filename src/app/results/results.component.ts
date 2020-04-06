import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
   data =  [
    {
    name: 'asfd',
    class: 3 ,
    Section: 'D',
    Sub1: 23 ,
    Sub2: 54,
    Sub3: 65 },
    {
      name: 'asfdasdd',
      class: 4 ,
      Section: 'e',
      Sub1: 23 ,
      Sub2: 54,
      Sub3: 65 },
      {
        name: 'asfasdsad',
        class: 3 ,
        Section: 'F',
        Sub1: 23 ,
        Sub2: 54,
        Sub3: 65 }];
   headers;
  constructor(private result: DataService) {   }
  ngOnInit(): void {
    if (!!this.result && this.result.getResults.length > 0) {
      // this.data = this.result.getResults;
      // this.headers = Object.keys(this.data[0]);
    }
    // console.log(this.headers, this.data);
  }
}
