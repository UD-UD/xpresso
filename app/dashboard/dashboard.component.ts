import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
const card = require("nativescript-cardview").CardView ;
import { Page } from "ui/page";
import { Label } from "ui/label";
import { StackLayout } from "ui/layouts/stack-layout";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public item : any;
  @ViewChild("contentStack") contentStackRef: ElementRef;

  constructor(private page : Page) { 
  }

  ngOnInit() { 
    console.log(this.item);
    let stack = <StackLayout>this.contentStackRef.nativeElement;
    let lable = new Label();
    lable.text = "Ujjal";
    stack.addChild(lable);
  }
}
