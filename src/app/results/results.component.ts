import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
   data;
   headers;
  constructor(private result: DataService) {   }
  ngOnInit(): void {
    if (!!this.result && this.result.getResults.length > 0) {
      this.data = this.result.getResults;
      this.headers = Object.keys(this.data[0]);
    }
    console.log(this.headers, this.data);
  }
}
