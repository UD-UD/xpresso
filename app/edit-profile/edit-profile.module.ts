import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { EditProfileRoutingModule } from "./edit-profile.routing";
import { EditProfileComponent } from "./edit-profile.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditProfileRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        EditProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditProfileModule { }
