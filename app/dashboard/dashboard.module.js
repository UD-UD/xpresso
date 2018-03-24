"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-grid-view/angular");
var dashboard_routing_module_1 = require(".//dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                angular_1.GridViewModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDBEQUFnRTtBQUNoRSx3RUFBcUU7QUFDckUsNkRBQTJEO0FBZ0IzRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWIzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixpREFBc0I7Z0JBQ3RCLHdCQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHdDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBHcmlkVmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuLy9kYXNoYm9hcmQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIERhc2hib2FyZFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgR3JpZFZpZXdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxyXG4iXX0=