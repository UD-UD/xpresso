import { Injectable,OnInit } from '@angular/core';
import { CouchdbService } from "../services/couchdb.service"
import { CardData } from '../model/CardData'
import { Utils } from "../utils/Utils"
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { FireBaseDbService } from './fire-base-db.service';
import { QrcodeService } from './qrcode.service';
import {MessageBox} from '../model/MessageBox'
import {Constants} from './constant'

@Injectable()
export class DashboardService implements OnInit{

  modelData : any
  mainImage ;
  gridImahe;
  sender ;
  tracker : Observable;

  constructor( private couchdb : CouchdbService , private FireDbService : FireBaseDbService ,private QRcode : QrcodeService) {
    this.modelData ={};
    this.modelData.mainCard = {};
    this.modelData.gridCard = {};
  }

  ngOnInit(){
    this.tracker =this.FireDbService.getTracker();

    this.tracker.addEventListener(Observable.propertyChangeEvent, (pcd: PropertyChangeData) =>  {
      console.log("change detected");
      switch(pcd.propertyName.toString()){
        case Constants.TRACKER_FRIEND_ADDED : 
        {
        Utils.generateToast("Friend Added")
        break;
      }
    }
  
    });
  }
  init(){
    this.modelData.mainCard = {};
    this.modelData.gridCard = {};
    //let messages = this.couchdb.getMessages();
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

  

  public AddFriend(friendId): void
  {
    let userId : any;
   // this.FireDbService.getCurrentUser().then(result => {
    // userId = JSON.stringify(result.value);
    console.log("from dashboard")
    userId = "efSh0Wg9GxdqM2BSJ1eaj8zHEZV2"
    let friend = this.createFriend()
    this.FireDbService.checkFriendAndAdd(friendId,friend,userId)
    this.FireDbService.checkFriendAndAdd(userId,friend,friendId)
    // })
    // .catch(error=>console.log("Error from dashboard service - cuurent user"))
      

 

  //    }, (errorMessage) => {
  //      console.log("No scan. " + errorMessage);
  //    }
  //  );
  }
  public createFriend()
  {
    return new MessageBox()
    }
  }


