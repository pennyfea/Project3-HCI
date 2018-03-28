import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from './shared/image.service';
import { DomainService } from '../domain.service';
import { LibraryService } from '../library.service';
import { Domain } from '../library';
import { Library } from '../library';


@Component({
  selector: 'app-metric-details',
  templateUrl: './metric-details.component.html',
  styleUrls: ['./metric-details.component.css']
})
export class MetricDetailsComponent implements OnInit {

  domain: Domain;
  library: Library;

  visibleImages: any[] = [];



  constructor(private imageService: ImageService, private domainService: DomainService, private libraryService:LibraryService, private location: Location, private route: ActivatedRoute) {
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



}
