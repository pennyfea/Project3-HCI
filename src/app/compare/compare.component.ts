import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  // domain: Domain;
  // private domainService: DomainService, private location: Location, private route: ActivatedRoute
  constructor( ) {
  }


  ngOnInit() {
    // this.getDomain();
  }

  // getDomain(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.domainService.getDomain(id)
  //     .subscribe(domain => this.domain = domain);
  // }

}
