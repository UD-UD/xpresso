import { Injectable } from '@angular/core';
import { CouchdbService } from "../services/couchdb.service"

@Injectable()
export class DashboardService {

  modelData : any
  constructor( private couchdb : CouchdbService) { 
    this.modelData ={};
  }

  init(){

    this.modelData.mainCard = {};
    this.modelData.gridCard = {};
    let messages = this.couchdb.getMessages();
  }

  prepareMainCardData(message){

    let firstMessage = message[0];


  }
}
