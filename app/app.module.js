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
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var couchdb_service_1 = require("./services/couchdb.service");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
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
                angular_2.NativeScriptUISideDrawerModule,
                nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSwwREFBZ0U7QUFDaEUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQywyRUFBNkQ7QUFDN0Qsd0VBQW1FO0FBQ25FLDREQUF5RDtBQUN6RCw4REFBb0Y7QUFDcEYsOERBQTJEO0FBQzNELHVFQUE2RDtBQUM3RCxrRUFBNkQ7QUE2QjdEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEzQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLHdDQUE4QjtnQkFDOUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixLQUFLLEVBQUUsMkJBQTJCO2lCQUFDLENBQUM7Z0JBQ3hDLHdCQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHdDQUFpQjtnQkFDakIsNENBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHcmlkVmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZVwiXHJcbmltcG9ydCB7IFFyY29kZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiIFxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbidcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXNoYm9hcmQuc2VydmljZVwiXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ30pLFxyXG4gICAgICAgIEdyaWRWaWV3TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnMgOltcclxuICAgICAgICBGaXJlQmFzZURiU2VydmljZSxcclxuICAgICAgICBCYXJjb2RlU2Nhbm5lcixcclxuICAgICAgICBRcmNvZGVTZXJ2aWNlLFxyXG4gICAgICAgIENvdWNoZGJTZXJ2aWNlLFxyXG4gICAgICAgIERhc2hib2FyZFNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19