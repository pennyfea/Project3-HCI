import { Injectable } from '@angular/core';
import { Library } from './library';
import { LIBRARIES } from './library-names';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LibraryService {

  constructor() { }

  getLibrary(id: number): Observable<Library>{
    return of(LIBRARIES.find(library => library.id === id));
  }

}
