import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
const card = require("nativescript-cardview").CardView ;
import { Page } from "ui/page";
import { Label } from "ui/label";
import { StackLayout } from "ui/layouts/stack-layout";
import { GridLayout } from  "ui/layouts/grid-layout";
import {DashboardService} from "../services/dashboard.service"

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

  @ViewChild("contentStack") contentStackRef: ElementRef; 

  constructor(private page : Page,private dashboardService : DashboardService) { 
  }

  ngOnInit() { 
    let stack = <StackLayout>this.contentStackRef.nativeElement;
    let lable = new Label();
    lable.text = "Ujjal";
    let card1 = elementRegistryModule.getViewClass("CardView");
    let card2 = new card1();
    let gl = new GridLayout();
    gl.addChild(lable);

    this.dashboardService.init();
  }
}
