import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ProfileRoutingModule } from "../profile/profile.routing";
import { ProfileComponent } from "../profile/profile.component";

@NgModule({
    bootstrap: [
        ProfileComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ProfileRoutingModule,
       
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
