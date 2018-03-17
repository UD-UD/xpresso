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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyx5RUFBa0U7QUFDbEUsOERBQTRGO0FBRzVGLHVFQUErRDtBQUMvRCwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBUXhEO0lBU0UsMEJBQW9CLGFBQWlDLEVBQVUsTUFBc0IsRUFBUyxtQkFBc0MsRUFBVSxRQUE0QixFQUFVLFNBQTBCO1FBQzVNLFVBQVU7UUFEUSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBSTlNLENBQUM7SUFDRCxrQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBQ0QsMENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJFLENBQUM7SUFDRCx1Q0FBWSxHQUFaO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFFMUMsQ0FBQztJQUNNLHFDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sMkNBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ00sdUNBQVksR0FBbkI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQTFDa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzZEQUFDO0lBUHZFLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FVb0Msd0NBQWlCLEVBQW1CLDhCQUFhLEVBQThCLHdCQUFpQixFQUFvQiw4Q0FBa0IsRUFBc0IsZ0NBQWM7T0FUbk0sZ0JBQWdCLENBb0Q1QjtJQUFELHVCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlyZUJhc2VEYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuaW1wb3J0IHtDb3VjaGRiU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlJ1xyXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBsb2dzIDogYW55O1xyXG4gIHB1YmxpYyByb3dzIDogYW55O1xyXG4gIHB1YmxpYyB1c2VyZGF0YSA6IGFueTtcclxuICBcclxuICBwdWJsaWMgaW1nc3JjIDogYW55O1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZpcmVEYlNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSwgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlLHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSBjb3VjaGJhc2UgOiBDb3VjaGRiU2VydmljZSkgeyBcclxuICAgIC8vIHN1cGVyKClcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIGdldExvZ3MoKTogdm9pZFxyXG4gIHtcclxuICAgIHRoaXMubG9ncyA9IHRoaXMuRmlyZURiU2VydmljZS5sb2dzO1xyXG4gICAgXHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIFxyXG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGJhc2UuZ2V0Q291Y2hEYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvd3MpKVxyXG4gICAgdGhpcy51c2VyZGF0YSA9dGhpcy5yb3dzWzBdLnVzZXJkYXRhO1xyXG4gICAgdGhpcy5pbWdzcmMgPSB0aGlzLlFSY29kZS5nZXRJbWFnZUZyb21iYXNlNjQodGhpcy51c2VyZGF0YS5RUmNvZGUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIGdldENvdWNodXNlcigpXHJcbiAge1xyXG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGJhc2UuZ2V0Q291Y2hEYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvd3MpKVxyXG4gICAgdGhpcy51c2VyZGF0YSA9dGhpcy5yb3dzWzBdLnVzZXJkYXRhO1xyXG4gICAgLy90aGlzLmltZ3NyYyA9IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXJkYXRhLmVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuaW1nc3JjKSlcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKVxyXG4gIHtcclxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcbiJdfQ==