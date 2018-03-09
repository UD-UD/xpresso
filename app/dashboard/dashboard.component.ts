import { Component, OnInit } from '@angular/core';
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public item : any;
  constructor() { 
    
    this.item ={};
    this.item.CreatedBy = 'hello'
    this.item.UpdatedDate = 'hello'
    this.item.Title = 'hello'
    this.item.Summary = 'hello'
  }

  ngOnInit() { }

}
