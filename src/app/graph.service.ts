import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {

  constructor() { }


  getTestingGraphs(id: number){
    return TESTINGRAPHS.slice(0).find(graph => graph.id == id)
  }
  getUtilitiesGraphs(id:number){
    return UTILITIESGRAPHS.slice(0).find(graph => graph.id == id)
  }

  getAllGraphs(id:number){
    return ALLGRAPHS.slice(0).find(graph => graph.id == id)
  }

}
const TESTINGRAPHS = [
  {id: 1, catergory: "testing", name: "Popularity", url: "assets/img/pgraph.jpg" },
  {id: 2, catergory: "testing", name: "releasefrequency", url: "assets/img/rqgraph.jpg" },
  {id: 3, catergory: "testing", name: "lmd", url: "assets/img/lmd.jpg" },
  {id: 5, catergory: "testing", name: "last discuss overflow", url: "assets/img/ldof.png" },
  {id: 6, catergory: "testing", name: "performance", url: "assets/img/performance.jpg" },
  {id: 7, catergory: "testing", name: "security", url: "assets/img/security.jpg" },
  {id: 8, catergory: "testing", name: "responsetime", url: "assets/img/responsetime.png" },
  {id: 9, catergory: "testing", name: "closingtime", url: "assets/img/isueclosing.png" }
];
const UTILITIESGRAPHS = [
  {id: 1, catergory: "utilities", name: "security", url: "assets/img/security.jpg" },
  {id: 2, catergory: "utilities", name: "responsetime", url: "assets/img/responsetime.png" },
  {id: 3, catergory: "utilities", name: "closingtime", url: "assets/img/isueclosing.png" }

];


const ALLGRAPHS = [

  {id: 1,   url: "assets/img/xmlpopularity.JPG" },
  {id: 2,  url: "assets/img/xmlreleasefrequency.JPG" },
  {id: 3, url: "assets/img/xmllastmodifed.png" },
  {id: 4,  url: "assets/img/xmlbackwards.PNG" },
  {id: 5, url: "assets/img/xmlcombinedstack.png" },
  {id: 6,  url: "assets/img/xmlperform.png" },
  {id: 7,  url: "assets/img/xmlsecure.png" },
  {id: 8, url: "assets/img/xmlresponserate.JPG" },
  {id: 9,  url: "assets/img/xmlcloserate.JPG" }



];
