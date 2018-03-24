"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-grid-view/angular");
var dashboard_routing_module_1 = require(".//dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var forms_1 = require("nativescript-angular/forms");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                forms_1.NativeScriptFormsModule,
                angular_1.GridViewModule,
                angular_2.NativeScriptUISideDrawerModule,
                nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDBEQUFnRTtBQUNoRSx3RUFBcUU7QUFDckUsNkRBQTJEO0FBQzNELG9EQUFxRTtBQUNyRSw4REFBb0Y7QUFDcEYsdUVBQTZEO0FBb0I3RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWpCM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaURBQXNCO2dCQUN0QiwrQkFBdUI7Z0JBQ3ZCLHdCQUFjO2dCQUNkLHdDQUE4QjtnQkFDOUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixLQUFLLEVBQUUsMkJBQTJCO2lCQUFDLENBQUM7YUFDM0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ncmlkLXZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vL2Rhc2hib2FyZC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbidcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEdyaWRWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ30pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cclxuIl19