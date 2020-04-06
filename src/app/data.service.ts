import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();
  counter;
  constructor() { }
  getResults = [
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

  changeMessage(message) {
    return this.messageSource.next(message);
  }

}
