import { Component,  ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {FireBaseDbService} from '../services/fire-base-db.service'
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Page } from "ui/page";


@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public logs : any;
@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
private drawer: RadSideDrawer;
  constructor(private FireDbService : FireBaseDbService, private _changeDetectionRef: ChangeDetectorRef) { 
   // super()

	
    
  }
getLogs(): void
{
  this.logs = this.FireDbService.logs;

}
ngAfterViewInit() {
  this.drawer = this.drawerComponent.sideDrawer;
  this._changeDetectionRef.detectChanges();
}
  ngOnInit() { 


  }
  
  public openDrawer() {
    this.drawer.showDrawer();
}
public onCloseDrawerTap() {
  this.drawer.closeDrawer();
}
  

}
