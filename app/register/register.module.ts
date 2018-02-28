import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RegisterRoutingModule } from "./register.routing";
import { RegisterComponent } from "./register.component";

@NgModule({
    bootstrap: [
        RegisterComponent
    ],
    imports: [
        NativeScriptCommonModule,
        RegisterRoutingModule
    ],
    declarations: [
        RegisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterModule { }
