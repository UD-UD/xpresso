import { Injectable } from '@angular/core';
import { CouchdbService } from "../services/couchdb.service"
import { CardData } from '../model/CardData'
import { Utils } from "../utils/Utils"
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

@Injectable()
export class DashboardService {
  
  modelData : any
  mainImage ;
  gridImahe;
  sender ;
  asyncData : Observable;
  
  constructor( private couchdb : CouchdbService) { 
    this.modelData ={};
    this.modelData.mainCard = {};
    this.modelData.gridCard = {};
    this.asyncData = new Observable();
    this.asyncData.set("change","false");
  }
  
  init(){
    this.modelData.mainCard = {};
    this.modelData.gridCard = {};
  }
  
  prepareMainCardData(message){
    let firstMessage = message[0];
  }
  
  getDashBoardData(){
    if(this.mainImage == undefined){
      this.mainImage = Utils.readImage("~/icons/img-1.png");
      this.sender = Utils.readImage("~/icons/img-2.png");
      this.gridImahe = Utils.readImage("~/icons/img-9.png");
    }
    
    let messages = this.couchdb.getMessages();
    let mainCard = new CardData();
    mainCard.mainImage = this.mainImage;
    mainCard.senderID = "ujjal1";
    mainCard.senderImage = this.gridImahe;
    mainCard.senderMessage = "Hello.. Hungry?..";
    
    let gridCards : CardData[] = [];
    
    for(let i=0;i<10;i++){
      let temp = new CardData();
      temp.mainImage = this.mainImage ;
      temp.senderID = "ujjal1";
      temp.senderImage = this.sender;
      temp.senderMessage = "Hello.. Hungry?..";
      gridCards.push(temp);
    }
    this.modelData.mainCard = mainCard;
    this.modelData.gridCard = gridCards;
    
    return this.modelData;
  }
  
  addData(){
    this.modelData.mainCard.senderMessage = "hellooooooo";
    this.triggerTracker();
  }
  
  triggerTracker() : void{
    if(this.asyncData.get("change") == "false"){
      this.asyncData.set("change","true");
    }
    else{
      this.asyncData.set("change","false");
    }
  }
  
  getTracker(): Observable{
    return this.asyncData;
  }
}
