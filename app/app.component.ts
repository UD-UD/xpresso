import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { CouchdbService } from "./services/couchdb.service";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent { 

    constructor(private couchService : CouchdbService ,  private routerExtensions: RouterExtensions, private fonticon: TNSFontIconService){}
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if(this.couchService.checkLoggedInStatus()){
            this.routerExtensions.navigate(["/profile"], {
                transition: {
                    name: "fade",
                    duration: 500,
                    curve: "linear"
                }
              });
        }
    }
}
