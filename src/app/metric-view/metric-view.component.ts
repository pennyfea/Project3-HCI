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
utilities:any;
testing: any;
visibleImages: any[] = [];
@Input() domain: Domain;
activeId: 0;

  constructor(private imageService: ImageService, private libraryService:LibraryService, private domainService: DomainService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((domain: Domain) => {this.domain = domain;});
    console.log("Hello this category",this.domain.category);

    this.visibleImages = this.imageService.getImages();
    console.log("visibleImages", this.visibleImages);
   }

//   ngOnInit() {
//
//         this.route.paramMap.subscribe(response => {
//           let path = window.location.pathname.split(";")[0].split("/").pop();
//           this.testing =  this.graphService.getTestingGraphs(parseInt(path));
//           this.utilities =  this.graphService.getUtilitiesGraphs(parseInt(path));
//           this.image = this.imageService.getImage(parseInt(path));
//         });
//
// }

    ngOnInit() {

          this.route.params.subscribe(response => {
            let path = window.location.pathname.split(";")[0].split("/").pop();
            this.activeId = parseInt(path);
            console.log("ActiveId",this.activeId);
            this.testing =  this.graphService.getTestingGraphs(parseInt(path));
            this.utilities =  this.graphService.getUtilitiesGraphs(parseInt(path));
            this.image = this.imageService.getImage(parseInt(path));
          });

    }


    next() {
      console.log("Before", this.activeId);
      const next = parseInt(this.activeId) + 1 >= 9 ? 1: parseInt(this.activeId) + 1;
      console.log("After", next);
      this.router.navigateByUrl('/image/' + `${next};id=${this.domain.id};category=${this.domain.category}`);
    }

}

  // prev() {
  //   const prev = this.activeId - 1 < 1 ? 9 : this.activeId - 1;
  //   this.router.navigate(['/image/' + prev]);
  // }
