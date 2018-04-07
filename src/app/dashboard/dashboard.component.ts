import { Component, OnInit, Input } from '@angular/core';
import { map,mergeMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomainService } from '../domain.service';
import { Domain } from '../library';
import { DOMAIN } from '../domain-names';
import { map,mergeMap } from 'rxjs/operators';



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


// ngOnInit() {
//     this.route.params.subscribe(params => { {this.activeId = +params['id'];
//     console.log(this.activeId); //log the entire params object
//   // console.log(params['id']) //log the value of id
//   // const id = +this.route.snapshot.paramMap.get('id');
//   // console.log(id);
//     console.log(this.domainService.getDomain(this.activeId));
//     // this.domainService.getDomain(this.activeId).subscribe(domain =>this.domain = domain;console.log("Added",this.domain);});
//     this.domainService.getDomain(this.activeId).subscribe(domain => {this.domains = domains; console.log(this.domains);})
//   }
// }
// }
