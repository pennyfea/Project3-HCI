import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from '../metric-details/shared/image.service';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { GraphService } from '../graph.service';
import { map,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-metric-view',
  templateUrl: './metric-view.component.html',
  styleUrls: ['./metric-view.component.css']
})
export class MetricViewComponent implements OnInit {
image: any
testing: any;
utilities: any;
library: Library;
visibleImages: any[] = [];


activeId = 0;


  constructor(private imageService: ImageService, private libraryService:LibraryService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(map((params) => params.get('id') || 0), map(n => Number(n)));
    id$.subscribe(id => {
      this.activeId = id;
      this.testing =  this.graphService.getTestingGraphs(id);
      this.utilities = this.graphService.getUtilitiesGraphs(id);
      this.image = this.imageService.getImage(id);
    });

    id$.pipe(mergeMap(id => this.libraryService.getLibrary(id)))
      .subscribe(library => this.library = library);
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
