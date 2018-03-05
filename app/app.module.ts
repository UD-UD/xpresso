import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { FireBaseDbService } from "./services/fire-base-db.service"
import { QrcodeService } from "./services/qrcode.service" 
import { CouchdbService } from "./services/couchdb.service"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers :[
        FireBaseDbService,
        BarcodeScanner,
        QrcodeService,
        CouchdbService
    ]
})
export class AppModule { }
