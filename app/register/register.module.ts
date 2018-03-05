import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RegisterRoutingModule } from "./register.routing";
import { RegisterComponent } from "./register.component";

@NgModule({
    bootstrap: [
        RegisterComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        RegisterRoutingModule,
       
    ],
    declarations: [
        RegisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterModule { }
