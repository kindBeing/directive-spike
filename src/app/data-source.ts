import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

export interface FunObject {
  name: string;
  type: string;
}

const FUN_OBJECTS = [
  {
    name: 'John',
    type: 'ACCOUNT',
  },
  {
    name: 'Brian',
    type: 'CONTACT',
  },
  {
    name: 'Chris',
    type: 'SETTINGS'
  }
  ];

@Injectable()
export class DataSource {
  fetchData(): Observable<FunObject[]> {
    return of(FUN_OBJECTS);
  }
}
