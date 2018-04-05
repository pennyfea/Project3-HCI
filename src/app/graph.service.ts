import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {

  constructor() { }

  // getGraph(id: number){
  //   return GRAPHS.slice(0).find(graph => graph.id == id)
  // }

  getTestingGraphs(id: number){
    return TESTINGRAPHS.slice(0).find(graph => graph.id == id)
  }

  getUtilitiesGraphs(id:number){
    return UTILITIESGRAPHS.slice(0).find(graph => graph.id == id)
  }

}

const TESTINGRAPHS = [
  {id: 1, catergory: "Popularity", url: "assets/img/pgraph.jpg" },
  {id: 2, catergory: "releasefrequency", url: "assets/img/rqgraph.jpg" },
  {id: 3, catergory: "lmd", url: "assets/img/lmd.jpg" },
  {id: 5, catergory: "last discuss overflow", url: "assets/img/ldof.png" },
  {id: 6, catergory: "performance", url: "assets/img/performance.jpg" },
  {id: 7, catergory: "security", url: "assets/img/security.jpg" },
  {id: 8, catergory: "responsetime", url: "assets/img/responsetime.png" },
  {id: 9, catergory: "closingtime", url: "assets/img/isueclosing.png" }
];


const UTILITIESGRAPHS = [
  {id: 1, catergory: "last discuss overflow", url: "assets/img/ldof.png" },
  {id: 2, catergory: "performance", url: "assets/img/performance.jpg" },
  {id: 3, catergory: "security", url: "assets/img/security.jpg" }
];
