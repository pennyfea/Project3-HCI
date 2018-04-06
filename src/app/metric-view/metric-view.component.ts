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

  // {{idnumber}}

})
export class MetricViewComponent implements OnInit {
image: any;
domain: Domain;
testing: any;
utilities: any;
library: Library;
visibleImages: any[] = [];


activeId = 0;

 @Input() idnumber: number;


  constructor(private imageService: ImageService, private libraryService:LibraryService, private domainService: DomainService, private graphService:GraphService, private location: Location, private route: ActivatedRoute, private router: Router) {
    this.visibleImages = this.imageService.getImages();
   }




  ngOnInit() {
//     const id$ = this.route.paramMap.pipe(map((params) => params.get('id') || 0), map(n => Number(n)));
//     id$.subscribe(id => {
//       this.activeId = id;
//       this.testing =  this.graphService.getTestingGraphs(id);
//       this.utilities = this.graphService.getUtilitiesGraphs(id);
//       this.image = this.imageService.getImage(id);
//     });
//
//     id$.pipe(mergeMap(id => this.libraryService.getLibrary(id)))
//       .subscribe(library => this.library = library);
//
//     // id$.pipe(mergeMap(id => this.domainService.getDomain(id)))
//     //   .subscribe(domain => this.domain = domain);
//
//       this.getDomain();
//
//
//       this.route.params
//       .subscribe(params => {
//       const id = +params['id'];
//       console.log(`Current param ID is: ${id}`);
// });

  this.route.params
  .subscribe(params => {
    this.activeId = +params['id'];
    console.log(this.activeId);
    if (this.activeId === 1) {
      this.testing =  this.graphService.getTestingGraphs(this.activeId);
      console.log(this.testing);
    }
    if (this.activeId === 2) {
      this.utilities = this.graphService.getUtilitiesGraphs(this.activeId);
      console.log(this.utilities);
    }


    this.image = this.imageService.getImage(this.activeId);
    console.log(this.image);


      this.libraryService.getLibrary(this.activeId)
       .subscribe(library => {
         this.library = library;
         console.log(this.library);
       });
    });

}

  //
  // getDomain(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.domainService.getDomain(id)
  //     .subscribe(domain => this.domain = domain);
  // }

  // public getNum(): number{
  //   let name = this.library;
  //   console.log(name);
  //   return name;
  // }


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
