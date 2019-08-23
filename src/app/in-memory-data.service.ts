import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const policies = [
      { id: 1, num: 10 },
      { id: 2, num: 20 },
      { id: 3, num: 55 },
      { id: 4, num: 30 },
    ]
    return {policies}
  }

}
