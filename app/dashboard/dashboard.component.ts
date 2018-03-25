import { Component, OnInit, ElementRef, ViewChild,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
const card = require("nativescript-cardview").CardView ;
import { Page } from "ui/page";
import { Label } from "ui/label";
import { StackLayout } from "ui/layouts/stack-layout";
import { GridLayout } from  "ui/layouts/grid-layout";
import {DashboardService} from "../services/dashboard.service" ;
import { EventData, Observable } from "data/observable";
import { ObservableArray } from "data/observable-array";
import { GridItemEventData } from "nativescript-grid-view";
import {FireBaseDbService} from '../services/fire-base-db.service'
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import {CouchdbService} from '../services/couchdb.service'
import {QrcodeService} from "../services/qrcode.service"
import * as imagepicker from "nativescript-imagepicker";
import * as imageSource from "tns-core-modules/image-source";
import {MessageBox} from '../model/MessageBox'
import {Message} from "../model/Message"


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public mainImage ;
  public senderImage ;
  public senderMessage ;
  public gridCards : any;
  public logs : any;
  public rows : any;
  public userdata : any;
  public items = [];
  public imgsrc : any;
  public userName : any;
  public profilePic : any;
  private drawer: RadSideDrawer;
  public friendId : any;
  public friendData : MessageBox;
  public image : any;
  public isOnline : any;
  public userId = "efSh0Wg9GxdqM2BSJ1eaj8zHEZV2";
  @ViewChild("contentStack") contentStackRef: ElementRef; 
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  
  constructor(private page : Page,
              private dashboardService : DashboardService,
              private FireDbService : FireBaseDbService, 
              private QRcode : QrcodeService,
              private _changeDetectionRef: ChangeDetectorRef,
              private fonticon: TNSFontIconService, 
              private couchbase : CouchdbService) { 
  }

  ngOnInit() { 
    //let stack = <StackLayout>this.contentStackRef.nativeElement;
    let gridlayout = <GridLayout>this.contentStackRef.nativeElement
    this.gridCards = new ObservableArray();
    let dashboardData = this.dashboardService.getDashBoardData();
    this.mainImage = dashboardData.mainCard.mainImage;
    this.senderImage = dashboardData.mainCard.senderImage;
    this.senderMessage = dashboardData.mainCard.senderMessage;
    this.gridCards.push(dashboardData.gridCard);
    this.rows = this.couchbase.getCouchData();
    console.log(JSON.stringify(this.rows))
    this.userdata =this.rows[0].userdata;
    this.imgsrc = this.QRcode.getImageFrombase64(this.userdata.QRcode);
    this.userName = this.userdata.name;
    this.profilePic = this.QRcode.getImageFrombase64(this.userdata.profile_pic);
  }

  getLogs(): void
  {
    this.logs = this.FireDbService.logs;
    
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  getCouchuser()
  {
    this.rows = this.couchbase.getCouchData();
    console.log(JSON.stringify(this.rows))
    this.userdata =this.rows[0].userdata;
    //this.imgsrc = this.QRcode.generateBarcode(this.userdata.email);
    console.log(JSON.stringify(this.imgsrc))

  }
  public openDrawer() {
    this.drawer.showDrawer();
  }
  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }
  public toggleDrawer()
  {
    this.drawer.toggleDrawerState();
  }
  public AddFriendCheck()
  {
    this.friendId = "vVg10raLuXfsxx4LNfPFHSrLboL2";

     
    this.FireDbService.getData('/users/'+this.userId+'/messages/'+this.friendId)
    .then(result => {//console.log(JSON.stringify(result.value))
      if(JSON.stringify(result.value)!= null)
        console.log("friend already added")
     // console.log(this.isOnline);
      else
      this.AddFriend()
    })
    .catch(error => console.log("Error: " + error));
  }
  public AddFriend(): void
  {
    // this.QRcode.scanBarcode().then((result) => {
    //   console.log(JSON.stringify(result));
      // this.friendId = JSON.stringify(result);
     this.friendId = "vVg10raLuXfsxx4LNfPFHSrLboL2";

     
      this.FireDbService.getData('/users/'+this.friendId+'/profile_pic')
      .then(result => {//console.log(JSON.stringify(result.value))
        this.image = JSON.stringify(result.value)
       // console.log(this.isOnline);
        
      })
      .catch(error => console.log("Error: " + error));
      this.FireDbService.getData('/users/'+this.friendId+'/isOnline')
      .then(result => {//console.log(JSON.stringify(result.value))
        this.isOnline = JSON.stringify(result.value)
       // console.log(this.isOnline);
        
      })
      .catch(error => console.log("Error: " + error));
      this.createFriend()
      this.FireDbService.addFriend(this.friendId,this.friendData,this.userId)
      
  //    }, (errorMessage) => {
  //      console.log("No scan. " + errorMessage);
  //    }
  //  );
  }
  public createFriend()
  {
    this.friendData ={
       chats : [],
       img : this.image,
       isOnline : this.isOnline
    }
  }
}
