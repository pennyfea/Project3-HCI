import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {

  // visibleImages = [];
  // getImages(){
  //   return this.visibleImages = IMAGES.slice(0);
  // }

  constructor() { }

  // getImage(id: number){
  //   return IMAGES.slice(0).find(image => image.id == id)
  // }


  getGraph(id: number){
    return GRAPHS.slice(0).find(graph => graph.id == id)
  }

}

const GRAPHS = [
  {id: 1, catergory: "Popularity", url: "assets/img/pgraph.jpg" },
  {id: 2, catergory: "releasefrequency", url: "assets/img/rqgraph.jpg" },
  {id: 3, catergory: "lmd", url: "assets/img/lmd.jpg" },
  {id: 5, catergory: "last discuss overflow", url: "assets/img/ldof.png" },
  {id: 6, catergory: "performance", url: "assets/img/performance.jpg" },
  {id: 7, catergory: "security", url: "assets/img/security.jpg" }
];
