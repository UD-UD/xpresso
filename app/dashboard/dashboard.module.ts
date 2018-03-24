import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { GridViewModule } from "nativescript-grid-view/angular";
import { DashboardRoutingModule } from ".//dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon'


@NgModule({
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule,
        NativeScriptFormsModule,
        GridViewModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'})
    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
