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
    ProfileComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyx5RUFBa0U7QUFDbEUsOERBQTRGO0FBSTVGLHVFQUErRDtBQVEvRDtJQUlFLDBCQUFvQixhQUFpQyxFQUFVLG1CQUFzQyxFQUFVLFFBQTRCO1FBQzFJLFVBQVU7UUFEUyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFJM0ksQ0FBQztJQUNILGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNDLG1DQUFRLEdBQVI7SUFHQSxDQUFDO0lBRU0scUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTSwyQ0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDTSx1Q0FBWSxHQUFuQjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBOUJrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7NkRBQUM7SUFGckUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQUtvQyx3Q0FBaUIsRUFBK0Isd0JBQWlCLEVBQW9CLDhDQUFrQjtPQUpoSSxnQkFBZ0IsQ0FtQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsICBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaXJlQmFzZURiU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnXHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbnB1YmxpYyBsb2dzIDogYW55O1xyXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbnByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgRmlyZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHsgXHJcbiAgIC8vIHN1cGVyKClcclxuXHJcblx0XHJcbiAgfVxyXG5nZXRMb2dzKCk6IHZvaWRcclxue1xyXG4gIHRoaXMubG9ncyA9IHRoaXMuRmlyZURiU2VydmljZS5sb2dzO1xyXG5cclxufVxyXG5uZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbn1cclxuICBuZ09uSW5pdCgpIHsgXHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbn1cclxucHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxufVxyXG5wdWJsaWMgdG9nZ2xlRHJhd2VyKClcclxue1xyXG4gIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbn1cclxuICBcclxuXHJcbn1cclxuIl19