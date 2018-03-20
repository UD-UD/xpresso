import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EditProfileComponent } from "./edit-profile.component";

const routes: Routes = [
    { path: "", component: EditProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EditProfileRoutingModule { }
