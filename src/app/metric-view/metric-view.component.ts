import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from '../metric-details/shared/image.service';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { Domain } from '../library';
import { GraphService } from '../graph.service';
import { DomainService } from '../domain.service';
import { map,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-metric-view',
  templateUrl: './metric-view.component.html',
  styleUrls: ['./metric-view.component.css']
})
export class MetricViewComponent implements OnInit {
image: any;
testing: any;
visibleImages: any[] = [];

@Input() domain: Domain[];


  constructor(private imageService: ImageService, private libraryService:LibraryService, private domainService: DomainService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {
    this.visibleImages = this.imageService.getImages();
   }


  ngOnInit() {
    this.testing =  this.graphService.getTestingGraphs(domain);
    console.log(this.testing);
    this.image = this.imageService.getImage(domain);
    console.log(this.image);

}

  next() {
    // const next = this.activeId + 1 >= this.image.length - 1  ? this.graph.length - 1 : this.activeId + 1;
    const next = this.activeId + 1 >= 9  ? 1 : this.activeId + 1;
    this.router.navigate(['/image/' + next]);
  }

  prev() {
    const prev = this.activeId - 1 < 1 ? 9 : this.activeId - 1;
    this.router.navigate(['/image/' + prev]);
  }

}
