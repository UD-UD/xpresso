import { Component, OnInit } from "@angular/core";

import { TextView } from "ui/text-view";

import * as dialogs from "tns-core-modules/ui/dialogs";

import { FireBaseDbService } from "../services/fire-base-db.service";

import { QrcodeService } from "../services/qrcode.service"

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public data ="Fb Data";
    constructor(private firebase : FireBaseDbService,private barcodeService : QrcodeService) {
    }

    ngOnInit(): void {
       
    }

    check(){
        console.log('clicked');

        
        
        var user ={
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };

        this.firebase.registerUser(user);
    }

    scan(){
        this.barcodeService.scanBarcode();
    }
}
