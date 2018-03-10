import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ProfileRoutingModule } from "../profile/profile.routing";
import { ProfileComponent } from "../profile/profile.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon'

@NgModule({
    bootstrap: [
        ProfileComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ProfileRoutingModule,
        NativeScriptUISideDrawerModule,
       
        TNSFontIconModule.forRoot({
            'mdi': '../material-design-icons.css'})
    
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
