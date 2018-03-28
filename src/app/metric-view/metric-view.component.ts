import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from '../metric-details/shared/image.service'
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { GraphService } from '../graph.service';


@Component({
  selector: 'app-metric-view',
  templateUrl: './metric-view.component.html',
  styleUrls: ['./metric-view.component.css']
})
export class MetricViewComponent implements OnInit {
image: any
graph: any
library: Library;

  constructor(private imageService: ImageService, private libraryService:LibraryService, private graphService:GraphService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id'])

    this.graph = this.graphService.getGraph(
      +this.route.snapshot.params['id'])
  }

}
