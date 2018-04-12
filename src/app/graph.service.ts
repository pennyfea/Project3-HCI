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

  // getAllGraphs(id:number){
  //   return ALLGRAPHS.slice(0).find(graph => graph.id == id)
  // }

}
const TESTINGRAPHS = [

    {id: 1,  url: "assets/img/xmlpopularity.JPG" },
    {id: 2,  url: "assets/img/xmlreleasefrequency.JPG" },
    {id: 3,  url: "assets/img/xmllastmodifed.png" },
    {id: 4,  url: "assets/img/xmlbackwards.PNG" },
    {id: 5,  url: "assets/img/xmlcombinedstack.png" },
    {id: 6,  url: "assets/img/xmlperform.png" },
    {id: 7,  url: "assets/img/xmlsecure.png" },
    {id: 8,  url: "assets/img/xmlresponserate.JPG" },
    {id: 9,  url: "assets/img/xmlclose.png" }


];

const UTILITIESGRAPHS = [

  {id: 9,   url: "assets/img/xmlpopularity.JPG" },
  {id: 8,   url: "assets/img/xmlreleasefrequency.JPG" },
  {id: 7,   url: "assets/img/xmllastmodifed.png" },
  {id: 6,   url: "assets/img/xmlbackwards.PNG" },
  {id: 5,  url: "assets/img/xmlcombinedstack.png" },
  {id: 4,  url: "assets/img/xmlperform.png" },
  {id: 3,  url: "assets/img/xmlsecure.png" },
  {id: 2,  url: "assets/img/xmlresponserate.JPG" },
  {id: 1,  url: "assets/img/xmlclose.png" }

];
