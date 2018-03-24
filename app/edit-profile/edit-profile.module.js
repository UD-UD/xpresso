"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var edit_profile_routing_1 = require("./edit-profile.routing");
var edit_profile_component_1 = require("./edit-profile.component");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                edit_profile_routing_1.EditProfileRoutingModule,
                forms_1.NativeScriptFormsModule,
                nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSwrREFBa0U7QUFDbEUsbUVBQWdFO0FBQ2hFLHVFQUE4RDtBQWtCOUQ7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQWhCN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBRXZCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsS0FBSyxFQUFFLDJCQUEyQjtpQkFBQyxDQUFDO2FBQzNDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEVkaXRQcm9maWxlUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgIFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnfSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBFZGl0UHJvZmlsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZU1vZHVsZSB7IH1cclxuIl19