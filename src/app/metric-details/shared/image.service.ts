import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

@Injectable()
export class ImageService {
  visibleImages = [];

  constructor() { }

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  // getImage(imageId: number){
  //   return IMAGES.slice(0).find(image => image.imageId == id)
  // }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES = [
{id: 1, category: "Popularity", url: "assets/img/popularity.png" },
{id: 2, category: "Release Frequency", url: "assets/img/releasefrequency.png" },
{id: 3, category: "Last modifying date", url: "assets/img/lmd.png" },
{id: 4, category: "Backwards compatability", url: "assets/img/BackwardsCompatibility.png"},
{id: 5, category: "Last discused on stack overflow", url: "assets/img/LDOSO.png" },
{id: 6, category: "Performance", url: "assets/img/performance.png" },
{id: 7, category: "Security", url: "assets/img/security.png" },
{id: 8, category: "Issue responding", url: "assets/img/irt.png" },
{id: 9, category: "Issue closing", url: "assets/img/ict.png" }

];
