import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from '../metric-details/shared/image.service';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { GraphService } from '../graph.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-metric-view',
  templateUrl: './metric-view.component.html',
  styleUrls: ['./metric-view.component.css']
})
export class MetricViewComponent implements OnInit {
image: any
graph: any
library: Library;
visibleImages: any[] = [];


activeId = 0;

get activeImage() {
 return this.image[this.activeId];
}

  constructor(private imageService: ImageService, private libraryService:LibraryService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
    this.getLibrary();

    this.image = this.imageService.getImage(
     +this.route.snapshot.params['id'])

    this.graph = this.graphService.getGraph(
      +this.route.snapshot.params['id'])

      this.route.paramMap.pipe(map((params) => params.get('id') || 0),map(n => Number(n))).subscribe(id => this.activeId = id);

  }

  getLibrary(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.libraryService.getLibrary(id)
      .subscribe(library => this.library = library);
  }

  next() {
    const next = this.activeId + 1 >= this.image.length - 1 ? this.graph.length -1 : this.activeId + 1;
    this.router.navigate('/image/' + [next])
  }

  prev() {
    const prev = this.activeId - 1 < 0 ? 0 : this.activeId - 1;
    this.router.navigate('/image/' + [prev])
  }

}
