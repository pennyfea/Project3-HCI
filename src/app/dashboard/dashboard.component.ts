import { Component, OnInit, Input } from '@angular/core';
import { Domain } from '../library';
import { DOMAIN } from '../domain-names';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  domain = DOMAIN;

  selectedDomain: Domain;

  onSelect(dom: Domain): void {
    this.selectedDomain = dom;
  }

  constructor() { }

  ngOnInit() {
  }


}
