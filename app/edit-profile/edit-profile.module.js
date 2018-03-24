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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSwrREFBa0U7QUFDbEUsbUVBQWdFO0FBQ2hFLHVFQUE4RDtBQWtCOUQ7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQWhCN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBRXZCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsS0FBSyxFQUFFLDJCQUEyQjtpQkFBQyxDQUFDO2FBQzNDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBFZGl0UHJvZmlsZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUucm91dGluZ1wiO1xuaW1wb3J0IHsgRWRpdFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBFZGl0UHJvZmlsZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgIFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcyd9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEVkaXRQcm9maWxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlTW9kdWxlIHsgfVxuIl19