"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var dashboard_service_1 = require("../services/dashboard.service");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var observable_1 = require("tns-core-modules/data/observable");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, dashboardService, FireDbService, QRcode, _changeDetectionRef, fonticon, couchbase) {
        this.page = page;
        this.dashboardService = dashboardService;
        this.FireDbService = FireDbService;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.couchbase = couchbase;
        this.items = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.rows = this.couchbase.getCouchData();
        this.userdata = this.rows[0].userdata;
        this.imgsrc = this.QRcode.getImageFrombase64(this.userdata.QRcode);
        this.userName = this.userdata.name;
        this.profilePic = this.QRcode.getImageFrombase64(this.userdata.profile_pic);
        this.updateModel();
    };
    DashboardComponent.prototype.updateModel = function () {
        var dashboardData = this.dashboardService.getDashBoardData();
        this.mainImage = dashboardData.mainCard.mainImage;
        this.senderImage = dashboardData.mainCard.senderImage;
        this.senderMessage = dashboardData.mainCard.senderMessage;
        this.gridCards.push(dashboardData.gridCard);
    };
    DashboardComponent.prototype.getLogs = function () {
        this.logs = this.FireDbService.logs;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.tracker = this.dashboardService.getTracker();
        this.tracker.addEventListener(observable_1.Observable.propertyChangeEvent, function (pcd) {
            console.log("change detected");
            _this.updateModel();
        });
    };
    DashboardComponent.prototype.getCouchuser = function () {
        this.rows = this.couchbase.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        //this.imgsrc = this.QRcode.generateBarcode(this.userdata.email);
        console.log(JSON.stringify(this.imgsrc));
    };
    DashboardComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    DashboardComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    DashboardComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    DashboardComponent.prototype.addData = function () {
        this.dashboardService.addData();
    };
    __decorate([
        core_1.ViewChild("contentStack"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "contentStackRef", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], DashboardComponent.prototype, "drawerComponent", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            dashboard_service_1.DashboardService,
            fire_base_db_service_1.FireBaseDbService,
            qrcode_service_1.QrcodeService,
            core_1.ChangeDetectorRef,
            nativescript_ng2_fonticon_1.TNSFontIconService,
            couchdb_service_1.CouchdbService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBR2hFLHlFQUFrRTtBQUNsRSw4REFBNEY7QUFFNUYsdUVBQStEO0FBQy9ELCtEQUEwRDtBQUMxRCw2REFBd0Q7QUFHeEQsK0RBQTJJO0FBUzNJO0lBa0JFLDRCQUFvQixJQUFXLEVBQ1gsZ0JBQW1DLEVBQ25DLGFBQWlDLEVBQ2pDLE1BQXNCLEVBQ3RCLG1CQUFzQyxFQUN0QyxRQUE0QixFQUM1QixTQUEwQjtRQU4xQixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQWZ2QyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBZ0JsQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElB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LEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQW9CMkIsV0FBSTtZQUNRLG9DQUFnQjtZQUNuQix3Q0FBaUI7WUFDeEIsOEJBQWE7WUFDRCx3QkFBaUI7WUFDNUIsOENBQWtCO1lBQ2hCLGdDQUFjO09BeEJuQyxrQkFBa0IsQ0FzRjlCO0lBQUQseUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5jb25zdCBjYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyA7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2VcIiA7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBHcmlkSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3XCI7XG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7Q291Y2hkYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZSdcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLEV2ZW50RGF0YSwgV3JhcHBlZFZhbHVlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBtYWluSW1hZ2UgO1xuICBwdWJsaWMgc2VuZGVySW1hZ2UgO1xuICBwdWJsaWMgc2VuZGVyTWVzc2FnZSA7XG4gIHB1YmxpYyBncmlkQ2FyZHMgOiBhbnk7XG4gIHB1YmxpYyBsb2dzIDogYW55O1xuICBwdWJsaWMgcm93cyA6IGFueTtcbiAgcHVibGljIHVzZXJkYXRhIDogYW55O1xuICBwdWJsaWMgaXRlbXMgPSBbXTtcbiAgcHVibGljIGltZ3NyYyA6IGFueTtcbiAgcHVibGljIHVzZXJOYW1lIDogYW55O1xuICBwdWJsaWMgcHJvZmlsZVBpYyA6IGFueTtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG4gIHRyYWNrZXIgOiBPYnNlcnZhYmxlO1xuICBAVmlld0NoaWxkKFwiY29udGVudFN0YWNrXCIpIGNvbnRlbnRTdGFja1JlZjogRWxlbWVudFJlZjsgXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZSA6IFBhZ2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGFzaGJvYXJkU2VydmljZSA6IERhc2hib2FyZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgRmlyZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIGNvdWNoYmFzZSA6IENvdWNoZGJTZXJ2aWNlKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMucm93cyA9IHRoaXMuY291Y2hiYXNlLmdldENvdWNoRGF0YSgpO1xuICAgIHRoaXMudXNlcmRhdGEgPXRoaXMucm93c1swXS51c2VyZGF0YTtcbiAgICB0aGlzLmltZ3NyYyA9IHRoaXMuUVJjb2RlLmdldEltYWdlRnJvbWJhc2U2NCh0aGlzLnVzZXJkYXRhLlFSY29kZSk7XG4gICAgdGhpcy51c2VyTmFtZSA9IHRoaXMudXNlcmRhdGEubmFtZTtcbiAgICB0aGlzLnByb2ZpbGVQaWMgPSB0aGlzLlFSY29kZS5nZXRJbWFnZUZyb21iYXNlNjQodGhpcy51c2VyZGF0YS5wcm9maWxlX3BpYyk7XG4gICAgdGhpcy51cGRhdGVNb2RlbCgpOyAgXG4gIH1cblxuICB1cGRhdGVNb2RlbCgpOnZvaWR7XG4gICAgbGV0IGRhc2hib2FyZERhdGEgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0RGFzaEJvYXJkRGF0YSgpO1xuICAgIHRoaXMubWFpbkltYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5tYWluSW1hZ2U7XG4gICAgdGhpcy5zZW5kZXJJbWFnZSA9IGRhc2hib2FyZERhdGEubWFpbkNhcmQuc2VuZGVySW1hZ2U7XG4gICAgdGhpcy5zZW5kZXJNZXNzYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5zZW5kZXJNZXNzYWdlO1xuICAgIHRoaXMuZ3JpZENhcmRzLnB1c2goZGFzaGJvYXJkRGF0YS5ncmlkQ2FyZCk7XG4gIH1cblxuICBnZXRMb2dzKCk6IHZvaWRcbiAge1xuICAgIHRoaXMubG9ncyA9IHRoaXMuRmlyZURiU2VydmljZS5sb2dzO1xuICAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudHJhY2tlciA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRUcmFja2VyKCk7XG5cbiAgICB0aGlzLnRyYWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsIChwY2Q6IFByb3BlcnR5Q2hhbmdlRGF0YSkgPT4gIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIGRldGVjdGVkXCIpO1xuICAgICAgdGhpcy51cGRhdGVNb2RlbCgpOyAgXG4gICAgfSk7XG4gIH1cblxuICBcblxuICBnZXRDb3VjaHVzZXIoKVxuICB7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGJhc2UuZ2V0Q291Y2hEYXRhKCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSlcbiAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XG4gICAgLy90aGlzLmltZ3NyYyA9IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXJkYXRhLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmltZ3NyYykpXG5cbiAgfVxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbiAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKClcbiAge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuICBhZGREYXRhKCl7XG4gICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmFkZERhdGEoKTtcbiAgfVxufVxuIl19