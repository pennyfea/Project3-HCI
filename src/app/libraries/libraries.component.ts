import { Component, OnInit, Input } from '@angular/core';
import { Library } from '../library';
import { LIBRARIES } from '../library-names';
@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {


  @Input() filterby?: string = 'all'
  libraries = LIBRARIES;


  selectedLibrary: Library;

  onSelect(library: Library): void {
    this.selectedLibrary = library;
  }

  constructor() { }

  ngOnInit() {
  }

}
