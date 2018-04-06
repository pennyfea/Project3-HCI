import { Component, OnInit, Input } from '@angular/core';
import { map,mergeMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Domain } from '../library';
import { DOMAIN } from '../domain-names';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  domain = DOMAIN;
  constructor(private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
}
