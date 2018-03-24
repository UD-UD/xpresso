"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(FireDbService, QRcode, _changeDetectionRef, fonticon, couchbase) {
        // super()
        this.FireDbService = FireDbService;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.couchbase = couchbase;
        this.items = [];
    }
    ProfileComponent.prototype.getLogs = function () {
        this.logs = this.FireDbService.logs;
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.rows = this.couchbase.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        this.imgsrc = this.QRcode.getImageFrombase64(this.userdata.QRcode);
        this.userName = this.userdata.name;
        this.profilePic = this.QRcode.getImageFrombase64(this.userdata.profile_pic);
    };
    ProfileComponent.prototype.getCouchuser = function () {
        this.rows = this.couchbase.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        //this.imgsrc = this.QRcode.generateBarcode(this.userdata.email);
        console.log(JSON.stringify(this.imgsrc));
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
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, qrcode_service_1.QrcodeService, core_1.ChangeDetectorRef, nativescript_ng2_fonticon_1.TNSFontIconService, couchdb_service_1.CouchdbService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyx5RUFBa0U7QUFDbEUsOERBQTRGO0FBRzVGLHVFQUErRDtBQUMvRCwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBVXhEO0lBWUUsMEJBQW9CLGFBQWlDLEVBQVUsTUFBc0IsRUFBUyxtQkFBc0MsRUFBVSxRQUE0QixFQUFVLFNBQTBCO1FBQzVNLFVBQVU7UUFEUSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBUnZNLFVBQUssR0FBRyxFQUFFLENBQUM7SUFZbEIsQ0FBQztJQUNELGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU5RSxDQUFDO0lBQ0QsdUNBQVksR0FBWjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxpRUFBaUU7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBRTFDLENBQUM7SUFDTSxxQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLDJDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNNLHVDQUFZLEdBQW5CO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUE1Q2tDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs2REFBQztJQVZ2RSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBYW9DLHdDQUFpQixFQUFtQiw4QkFBYSxFQUE4Qix3QkFBaUIsRUFBb0IsOENBQWtCLEVBQXNCLGdDQUFjO09BWm5NLGdCQUFnQixDQTJENUI7SUFBRCx1QkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XHJcbmltcG9ydCB7Q291Y2hkYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZSdcclxuaW1wb3J0IHtRcmNvZGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbG9ncyA6IGFueTtcclxuICBwdWJsaWMgcm93cyA6IGFueTtcclxuICBwdWJsaWMgdXNlcmRhdGEgOiBhbnk7XHJcbiAgcHVibGljIGl0ZW1zID0gW107XHJcbiAgcHVibGljIGltZ3NyYyA6IGFueTtcclxuICBwdWJsaWMgdXNlck5hbWUgOiBhbnk7XHJcbiAgcHVibGljIHByb2ZpbGVQaWMgOiBhbnk7XHJcblxyXG5cclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBGaXJlRGJTZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UsIHByaXZhdGUgUVJjb2RlIDogUXJjb2RlU2VydmljZSxwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgY291Y2hiYXNlIDogQ291Y2hkYlNlcnZpY2UpIHsgXHJcbiAgICAvLyBzdXBlcigpXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBnZXRMb2dzKCk6IHZvaWRcclxuICB7XHJcbiAgICB0aGlzLmxvZ3MgPSB0aGlzLkZpcmVEYlNlcnZpY2UubG9ncztcclxuICAgIFxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICBcclxuICAgIHRoaXMucm93cyA9IHRoaXMuY291Y2hiYXNlLmdldENvdWNoRGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSlcclxuICAgIHRoaXMudXNlcmRhdGEgPXRoaXMucm93c1swXS51c2VyZGF0YTtcclxuICAgIHRoaXMuaW1nc3JjID0gdGhpcy5RUmNvZGUuZ2V0SW1hZ2VGcm9tYmFzZTY0KHRoaXMudXNlcmRhdGEuUVJjb2RlKTtcclxuICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLnVzZXJkYXRhLm5hbWU7XHJcbiAgICB0aGlzLnByb2ZpbGVQaWMgPSB0aGlzLlFSY29kZS5nZXRJbWFnZUZyb21iYXNlNjQodGhpcy51c2VyZGF0YS5wcm9maWxlX3BpYyk7XHJcbiAgICBcclxuICB9XHJcbiAgZ2V0Q291Y2h1c2VyKClcclxuICB7XHJcbiAgICB0aGlzLnJvd3MgPSB0aGlzLmNvdWNoYmFzZS5nZXRDb3VjaERhdGEoKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXHJcbiAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XHJcbiAgICAvL3RoaXMuaW1nc3JjID0gdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlcmRhdGEuZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5pbWdzcmMpKVxyXG5cclxuICB9XHJcbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpXHJcbiAge1xyXG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxufVxyXG4iXX0=