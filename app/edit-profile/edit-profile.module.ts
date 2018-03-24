import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { EditProfileRoutingModule } from "./edit-profile.routing";
import { EditProfileComponent } from "./edit-profile.component";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditProfileRoutingModule,
        NativeScriptFormsModule,
       
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'})
    ],
    declarations: [
        EditProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditProfileModule { }
