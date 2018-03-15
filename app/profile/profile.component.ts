import { Component,  ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {FireBaseDbService} from '../services/fire-base-db.service'
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import {CouchdbService} from '../services/couchdb.service'

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public logs : any;
public rows : any;
public userdata : any;
@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
private drawer: RadSideDrawer;
  constructor(private FireDbService : FireBaseDbService, private _changeDetectionRef: ChangeDetectorRef, private fonticon: TNSFontIconService, private couchbase : CouchdbService) { 
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
getCouchuser()
{
 this.rows = this.couchbase.getCouchData();
 console.log(JSON.stringify(this.rows))
this.userdata =this.rows['userdata'];
console.log(JSON.stringify(this.userdata))
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
  

}
