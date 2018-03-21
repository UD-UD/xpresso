import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  //public gridCards ;

  public grid : Observable;

  public gridCards : any;

  @ViewChild("contentStack") contentStackRef: ElementRef; 

  constructor(private page : Page,private dashboardService : DashboardService) { 
  }

  ngOnInit() { 
    //let stack = <StackLayout>this.contentStackRef.nativeElement;
    
    // let lable = new Label()ß
    // lable.text = "Ujjal";
    // let card1 = elementRegistryModule.getViewClass("CardView");
    // let card2 = new card1();
    // let gl = new GridLayout();
    // gl.addChild(lable);

    // this.dashboardService.init();

    let gridlayout = <GridLayout>this.contentStackRef.nativeElement
    this.gridCards = new ObservableArray();
    let dashboardData = this.dashboardService.getDashBoardData();
    this.mainImage = dashboardData.mainCard.mainImage;
    this.senderImage = dashboardData.mainCard.senderImage;
    this.senderMessage = dashboardData.mainCard.senderMessage;

    this.gridCards.push(dashboardData.gridCard);

    this.grid = new Observable();
    this.grid.set("gridCards", this.gridCards);

    this.page.bindingContext = this.grid;
    
  }
}
