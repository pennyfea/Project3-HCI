import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from './shared/image.service';
import { DomainService } from '../domain.service';
import { GraphService } from '../graph.service';
import { LibraryService } from '../library.service';
import { Domain } from '../library';
import { Library } from '../library';
import { map,mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-metric-details',
  templateUrl: './metric-details.component.html',
  styleUrls: ['./metric-details.component.css']
})
export class MetricDetailsComponent implements OnInit {

  visibleImages: any[] = [];
  activeId = 0;
  domain: Domain[];

  constructor(private imageService: ImageService, private domainService: DomainService, private libraryService:LibraryService, private graphService:GraphService, private location: Location, private route: ActivatedRoute,  private router: Router) {
    this.visibleImages = this.imageService.getImages();

}

  ngOnInit() {
      this.route.params.subscribe(params => { {this.activeId = +params['id'];
      console.log(this.activeId); //log the entire params object
    // console.log(params['id']) //log the value of id
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
      console.log(this.domainService.getDomain(this.activeId));
      // this.domainService.getDomain(this.activeId).subscribe(domain =>this.domain = domain;console.log("Added",this.domain);});
      this.domainService.getDomain(this.activeId).subscribe(domain => {this.domain = domain; console.log(this.domain);})
    }
  }
