import { Component, OnInit, Input } from '@angular/core';
import { map,mergeMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomainService } from '../domain.service';
import { Domain } from '../library';
import { DOMAIN } from '../domain-names';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  domain = DOMAIN;
  domains: Domains[] = [];
  constructor(private location: Location, private route: ActivatedRoute, private router: Router,  private domainService: DomainService) { }

  ngOnInit() {
  }
}
