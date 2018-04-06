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

  domain: Domain;
  library: Library;
  image: any;
  testing: any;
  utilities: any;


  visibleImages: any[] = [];
  activeId = 0;
  idnumber = 1;



  constructor(private imageService: ImageService, private domainService: DomainService, private libraryService:LibraryService, private graphService:GraphService, private location: Location, private route: ActivatedRoute,  private router: Router) {
    this.visibleImages = this.imageService.getImages();

}

  ngOnInit() {

    this.getDomain();
    this.getLibrary();
}

getDomain(): void{
  const id = +this.route.snapshot.paramMap.get('id');
  this.domainService.getDomain(id)
    .subscribe(domain => this.domain = domain);
}



getLibrary(): void{
  const id = +this.route.snapshot.paramMap.get('id');
  this.libraryService.getLibrary(id)
    .subscribe(library => this.library = library);
}
