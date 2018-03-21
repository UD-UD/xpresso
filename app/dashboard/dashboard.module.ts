import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { GridViewModule } from "nativescript-grid-view/angular";
import { DashboardRoutingModule } from ".//dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule,
        GridViewModule
    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
