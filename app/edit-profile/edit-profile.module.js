"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var edit_profile_routing_1 = require("./edit-profile.routing");
var edit_profile_component_1 = require("./edit-profile.component");
var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                edit_profile_routing_1.EditProfileRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                edit_profile_component_1.EditProfileComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], EditProfileModule);
    return EditProfileModule;
}());
exports.EditProfileModule = EditProfileModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSwrREFBa0U7QUFDbEUsbUVBQWdFO0FBZWhFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFiN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXdCO2dCQUN4QiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkNBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRWRpdFByb2ZpbGVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRWRpdFByb2ZpbGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVNb2R1bGUgeyB9XHJcbiJdfQ==