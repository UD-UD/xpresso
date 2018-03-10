"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(FireDbService, _changeDetectionRef, fonticon) {
        // super()
        this.FireDbService = FireDbService;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
    }
    ProfileComponent.prototype.getLogs = function () {
        this.logs = this.FireDbService.logs;
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    ProfileComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ProfileComponent.prototype, "drawerComponent", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, core_1.ChangeDetectorRef, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyx5RUFBa0U7QUFDbEUsOERBQTRGO0FBSTVGLHVFQUErRDtBQVEvRDtJQUlFLDBCQUFvQixhQUFpQyxFQUFVLG1CQUFzQyxFQUFVLFFBQTRCO1FBQzFJLFVBQVU7UUFEUyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFJM0ksQ0FBQztJQUNILGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNDLG1DQUFRLEdBQVI7SUFHQSxDQUFDO0lBRU0scUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTSwyQ0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUExQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs2REFBQztJQUZyRSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBS29DLHdDQUFpQixFQUErQix3QkFBaUIsRUFBb0IsOENBQWtCO09BSmhJLGdCQUFnQixDQStCNUI7SUFBRCx1QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxucHVibGljIGxvZ3MgOiBhbnk7XHJcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxucHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBGaXJlRGJTZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkgeyBcclxuICAgLy8gc3VwZXIoKVxyXG5cclxuXHRcclxuICB9XHJcbmdldExvZ3MoKTogdm9pZFxyXG57XHJcbiAgdGhpcy5sb2dzID0gdGhpcy5GaXJlRGJTZXJ2aWNlLmxvZ3M7XHJcblxyXG59XHJcbm5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxufVxyXG4gIG5nT25Jbml0KCkgeyBcclxuXHJcblxyXG4gIH1cclxuICBcclxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxufVxyXG5wdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcclxuICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG59XHJcbiAgXHJcblxyXG59XHJcbiJdfQ==