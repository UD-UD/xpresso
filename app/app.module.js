"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
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
                forms_1.NativeScriptFormsModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDJFQUE2RDtBQUM3RCx3RUFBbUU7QUFDbkUsNERBQXlEO0FBQ3pELDhEQUEyRDtBQUMzRCxrRUFBNkQ7QUF5QjdEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF2QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asd0NBQWlCO2dCQUNqQiw0Q0FBYztnQkFDZCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxvQ0FBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZVwiXG5pbXBvcnQgeyBRcmNvZGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIiBcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2VcIlxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnMgOltcbiAgICAgICAgRmlyZUJhc2VEYlNlcnZpY2UsXG4gICAgICAgIEJhcmNvZGVTY2FubmVyLFxuICAgICAgICBRcmNvZGVTZXJ2aWNlLFxuICAgICAgICBDb3VjaGRiU2VydmljZSxcbiAgICAgICAgRGFzaGJvYXJkU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19