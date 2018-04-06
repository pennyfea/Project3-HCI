import { Injectable } from '@angular/core';
import { Domain } from './library';
import { DOMAIN } from './domain-names';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DomainService {

  constructor() { }

  getDomain(id: number): Observable<Domain>{
    return of(DOMAIN.find(domain => domain.id === id ));
  }
}
