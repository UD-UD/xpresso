"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-grid-view/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var fire_base_db_service_1 = require("./services/fire-base-db.service");
var qrcode_service_1 = require("./services/qrcode.service");
var couchdb_service_1 = require("./services/couchdb.service");
var dashboard_service_1 = require("./services/dashboard.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                angular_1.GridViewModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                fire_base_db_service_1.FireBaseDbService,
                nativescript_barcodescanner_1.BarcodeScanner,
                qrcode_service_1.QrcodeService,
                couchdb_service_1.CouchdbService,
                dashboard_service_1.DashboardService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSwwREFBZ0U7QUFDaEUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQywyRUFBNkQ7QUFDN0Qsd0VBQW1FO0FBQ25FLDREQUF5RDtBQUN6RCw4REFBMkQ7QUFDM0Qsa0VBQTZEO0FBMEI3RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCx3Q0FBaUI7Z0JBQ2pCLDRDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLG9DQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgR3JpZFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdyaWQtdmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlXCJcbmltcG9ydCB7IFFyY29kZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiIFxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXNoYm9hcmQuc2VydmljZVwiXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBHcmlkVmlld01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnMgOltcbiAgICAgICAgRmlyZUJhc2VEYlNlcnZpY2UsXG4gICAgICAgIEJhcmNvZGVTY2FubmVyLFxuICAgICAgICBRcmNvZGVTZXJ2aWNlLFxuICAgICAgICBDb3VjaGRiU2VydmljZSxcbiAgICAgICAgRGFzaGJvYXJkU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19