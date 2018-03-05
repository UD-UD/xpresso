"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var fire_base_db_service_1 = require("./services/fire-base-db.service");
var couch_base_db_service_1 = require("./services/couch-base-db.service");
var qrcode_service_1 = require("./services/qrcode.service");
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
<<<<<<< HEAD
                couch_base_db_service_1.CouchbaseDbService
=======
                nativescript_barcodescanner_1.BarcodeScanner,
                qrcode_service_1.QrcodeService
>>>>>>> feature/login-register-implementation
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0Msd0VBQW1FO0FBQ25FLDBFQUFtRTtBQXFCbkU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQW5CckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asd0NBQWlCO2dCQUNqQiwwQ0FBa0I7YUFDckI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge0NvdWNoYmFzZURiU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY291Y2gtYmFzZS1kYi5zZXJ2aWNlXCJcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVycyA6W1xyXG4gICAgICAgIEZpcmVCYXNlRGJTZXJ2aWNlLFxyXG4gICAgICAgIENvdWNoYmFzZURiU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDJFQUE2RDtBQUM3RCx3RUFBbUU7QUFDbkUsNERBQXlEO0FBdUJ6RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBckJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHdDQUFpQjtnQkFDakIsNENBQWM7Z0JBQ2QsOEJBQWE7YUFDaEI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgUXJjb2RlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCIgXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnMgOltcclxuICAgICAgICBGaXJlQmFzZURiU2VydmljZSxcclxuICAgICAgICBCYXJjb2RlU2Nhbm5lcixcclxuICAgICAgICBRcmNvZGVTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
>>>>>>> feature/login-register-implementation
