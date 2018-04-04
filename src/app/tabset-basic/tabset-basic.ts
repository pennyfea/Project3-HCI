import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ImageService } from '../metric-details/shared/image.service'

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html',
  styleUrls: ['./tabset-basic.css']

})
export class NgbdTabsetBasic implements OnInit {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService, private location: Location, private route: ActivatedRoute) {
    this.visibleImages = this.imageService.getImages();

}


    ngOnInit() {
  
    }



 }
