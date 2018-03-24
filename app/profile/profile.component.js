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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyx5RUFBa0U7QUFDbEUsOERBQTRGO0FBRzVGLHVFQUErRDtBQUMvRCwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBVXhEO0lBWUUsMEJBQW9CLGFBQWlDLEVBQVUsTUFBc0IsRUFBUyxtQkFBc0MsRUFBVSxRQUE0QixFQUFVLFNBQTBCO1FBQzVNLFVBQVU7UUFEUSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBUnZNLFVBQUssR0FBRyxFQUFFLENBQUM7SUFZbEIsQ0FBQztJQUNELGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU5RSxDQUFDO0lBQ0QsdUNBQVksR0FBWjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxpRUFBaUU7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBRTFDLENBQUM7SUFDTSxxQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLDJDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNNLHVDQUFZLEdBQW5CO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUE1Q2tDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs2REFBQztJQVZ2RSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBYW9DLHdDQUFpQixFQUFtQiw4QkFBYSxFQUE4Qix3QkFBaUIsRUFBb0IsOENBQWtCLEVBQXNCLGdDQUFjO09BWm5NLGdCQUFnQixDQTJENUI7SUFBRCx1QkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaXJlQmFzZURiU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7Q291Y2hkYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZSdcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbG9ncyA6IGFueTtcbiAgcHVibGljIHJvd3MgOiBhbnk7XG4gIHB1YmxpYyB1c2VyZGF0YSA6IGFueTtcbiAgcHVibGljIGl0ZW1zID0gW107XG4gIHB1YmxpYyBpbWdzcmMgOiBhbnk7XG4gIHB1YmxpYyB1c2VyTmFtZSA6IGFueTtcbiAgcHVibGljIHByb2ZpbGVQaWMgOiBhbnk7XG5cblxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZpcmVEYlNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSwgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlLHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSBjb3VjaGJhc2UgOiBDb3VjaGRiU2VydmljZSkgeyBcbiAgICAvLyBzdXBlcigpXG4gICAgXG4gICAgXG4gIH1cbiAgZ2V0TG9ncygpOiB2b2lkXG4gIHtcbiAgICB0aGlzLmxvZ3MgPSB0aGlzLkZpcmVEYlNlcnZpY2UubG9ncztcbiAgICBcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7IFxuICAgIFxuICAgIHRoaXMucm93cyA9IHRoaXMuY291Y2hiYXNlLmdldENvdWNoRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICAgdGhpcy51c2VyZGF0YSA9dGhpcy5yb3dzWzBdLnVzZXJkYXRhO1xuICAgIHRoaXMuaW1nc3JjID0gdGhpcy5RUmNvZGUuZ2V0SW1hZ2VGcm9tYmFzZTY0KHRoaXMudXNlcmRhdGEuUVJjb2RlKTtcbiAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy51c2VyZGF0YS5uYW1lO1xuICAgIHRoaXMucHJvZmlsZVBpYyA9IHRoaXMuUVJjb2RlLmdldEltYWdlRnJvbWJhc2U2NCh0aGlzLnVzZXJkYXRhLnByb2ZpbGVfcGljKTtcbiAgICBcbiAgfVxuICBnZXRDb3VjaHVzZXIoKVxuICB7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGJhc2UuZ2V0Q291Y2hEYXRhKCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSlcbiAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XG4gICAgLy90aGlzLmltZ3NyYyA9IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXJkYXRhLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmltZ3NyYykpXG5cbiAgfVxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbiAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKClcbiAge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuXG4gIFxuICBcbn1cbiJdfQ==