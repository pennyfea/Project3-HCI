import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }


  constructor() { }


  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES = [
{id: 1, catergory: "Popularity", url: "assets/img/popularity.png" },
{id: 2, catergory: "Release Frequency", url: "assets/img/releasefrequency.png" },
{id: 3, catergory: "Last modifying date", url: "assets/img/lmd.png" },
{id: 4, catergory: "Backwards compatability", url: "assets/img/BackwardsCompatibility.png"},
{id: 5, catergory: "Last discused on stack overflow", url: "assets/img/LDOSO.png" },
{id: 6, catergory: "Performance", url: "assets/img/performance.png" },
{id: 7, catergory: "Security", url: "assets/img/security.png" },
{id: 8, catergory: "Issue responding", url: "assets/img/irt.png" },
{id: 9, catergory: "Issue closing", url: "assets/img/ict.png" }

];
