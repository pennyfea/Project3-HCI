import { Component, OnInit } from '@angular/core';
import { Domain } from '../library';
import { DOMAIN } from '../domain-names';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {


  domain = DOMAIN;

  selectedDomains: Domain[] = [];

  // onSelect(dom: Domain): void {
  //   this.selectedDomain = dom;
  // }

  toggleDomain(domain: Domain) {
    if(this.selectedDomains.includes(domain)) {
        this.selectedDomains.splice(this.selectedDomains.indexOf(domain), 1);
    } else {
        this.selectedDomains.push(domain);
    }
  }

  isSelected(domain: Domain) {
    return this.selectedDomains.includes(domain);
  }



  constructor() {}


  ngOnInit() {}


}
