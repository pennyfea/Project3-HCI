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
activeId = 0;


@Input() domains: Domains[];


  constructor(private imageService: ImageService, private libraryService:LibraryService, private domainService: DomainService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {

  this.route.params.subscribe((domain: Domain) => {
         this.domain = domain;});
  console.log("Hello this catergory",this.domain);
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {

        const id$ = this.route.paramMap.pipe(map((params) => params.get('id') || 0), map(n => Number(n)));
        id$.subscribe(id => {
          this.activeId = id;
          this.testing =  this.graphService.getAllGraphs(id);
          this.image = this.imageService.getImage(id);
        });

          this.route.params
          .subscribe(params => {
          const id = +params['id'];
          console.log(`Current param ID is: ${id}`);
    });


    //     const id$ = this.route.paramMap.pipe(map((params) => params.get('id') || 0), map(n => Number(n)));
    //     id$.subscribe(id => {
    //       this.activeId = id;
    //       console.log("ActiveId",this.activeId);
    //       this.testing =  this.graphService.getTestingGraphs(id);
    //       this.image = this.imageService.getImage(id);
    //     });
    //       this.route.params
    //       .subscribe(params => {
    //       const id = +params['id'];
    //       console.log(`Current param ID is: ${id}`);
    // });

    // this.route.params.subscribe(response => {
    //    let path = window.location.pathname.split('/');
    //    let path1 = window.location.pathname.split(';')
    //    var id = path[0]
    //    console.log("Path",path)
    //    console.log("Path",path1)
    //    console.log("id", id)
    //
    // });

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
