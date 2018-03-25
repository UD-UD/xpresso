"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var dashboard_service_1 = require("../services/dashboard.service");
var observable_array_1 = require("data/observable-array");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
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
        this.userId = "efSh0Wg9GxdqM2BSJ1eaj8zHEZV2";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //let stack = <StackLayout>this.contentStackRef.nativeElement;
        var gridlayout = this.contentStackRef.nativeElement;
        this.gridCards = new observable_array_1.ObservableArray();
        var dashboardData = this.dashboardService.getDashBoardData();
        this.mainImage = dashboardData.mainCard.mainImage;
        this.senderImage = dashboardData.mainCard.senderImage;
        this.senderMessage = dashboardData.mainCard.senderMessage;
        this.gridCards.push(dashboardData.gridCard);
        this.rows = this.couchbase.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        this.imgsrc = this.QRcode.getImageFrombase64(this.userdata.QRcode);
        this.userName = this.userdata.name;
        this.profilePic = this.QRcode.getImageFrombase64(this.userdata.profile_pic);
    };
    DashboardComponent.prototype.getLogs = function () {
        this.logs = this.FireDbService.logs;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
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
    DashboardComponent.prototype.AddFriendCheck = function () {
        var _this = this;
        this.friendId = "vVg10raLuXfsxx4LNfPFHSrLboL2";
        this.FireDbService.getData('/users/' + this.userId + '/messages/' + this.friendId)
            .then(function (result) {
            if (JSON.stringify(result.value) != null)
                console.log("friend already added");
            else
                _this.AddFriend();
        })
            .catch(function (error) { return console.log("Error: " + error); });
    };
    DashboardComponent.prototype.AddFriend = function () {
        var _this = this;
        // this.QRcode.scanBarcode().then((result) => {
        //   console.log(JSON.stringify(result));
        // this.friendId = JSON.stringify(result);
        this.friendId = "vVg10raLuXfsxx4LNfPFHSrLboL2";
        this.FireDbService.getData('/users/' + this.friendId + '/profile_pic')
            .then(function (result) {
            _this.image = JSON.stringify(result.value);
            // console.log(this.isOnline);
        })
            .catch(function (error) { return console.log("Error: " + error); });
        this.FireDbService.getData('/users/' + this.friendId + '/isOnline')
            .then(function (result) {
            _this.isOnline = JSON.stringify(result.value);
            // console.log(this.isOnline);
        })
            .catch(function (error) { return console.log("Error: " + error); });
        this.createFriend();
        this.FireDbService.addFriend(this.friendId, this.friendData, this.userId);
        //    }, (errorMessage) => {
        //      console.log("No scan. " + errorMessage);
        //    }
        //  );
    };
    DashboardComponent.prototype.createFriend = function () {
        this.friendData = {
            chats: [],
            img: this.image,
            isOnline: this.isOnline
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBRWhFLDBEQUF3RDtBQUV4RCx5RUFBa0U7QUFDbEUsOERBQTRGO0FBRTVGLHVFQUErRDtBQUMvRCwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBY3hEO0lBc0JFLDRCQUFvQixJQUFXLEVBQ1gsZ0JBQW1DLEVBQ25DLGFBQWlDLEVBQ2pDLE1BQXNCLEVBQ3RCLG1CQUFzQyxFQUN0QyxRQUE0QixFQUM1QixTQUEwQjtRQU4xQixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQW5CdkMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVNYLFdBQU0sR0FBRyw4QkFBOEIsQ0FBQztJQVcvQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLDhEQUE4RDtRQUM5RCxJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQTtRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FB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LENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTNFLDRCQUE0QjtRQUM1QixnREFBZ0Q7UUFDaEQsT0FBTztRQUNQLE1BQU07SUFDTixDQUFDO0lBQ00seUNBQVksR0FBbkI7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFFO1lBQ2QsS0FBSyxFQUFHLEVBQUU7WUFDVixHQUFHLEVBQUcsSUFBSSxDQUFDLEtBQUs7WUFDaEIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUE7SUFDSCxDQUFDO0lBL0cwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBa0IsaUJBQVU7K0RBQUM7SUFDcEI7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOytEQUFDO0lBcEJ2RSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBd0IyQixXQUFJO1lBQ1Esb0NBQWdCO1lBQ25CLHdDQUFpQjtZQUN4Qiw4QkFBYTtZQUNELHdCQUFpQjtZQUM1Qiw4Q0FBa0I7WUFDaEIsZ0NBQWM7T0E1Qm5DLGtCQUFrQixDQW1JOUI7SUFBRCx5QkFBQztDQUFBLEFBbklELElBbUlDO0FBbklZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbmNvbnN0IGNhcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3IDtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2VcIiA7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBHcmlkSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3XCI7XHJcbmltcG9ydCB7RmlyZUJhc2VEYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xyXG5pbXBvcnQge0NvdWNoZGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2UnXHJcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHtNZXNzYWdlQm94fSBmcm9tICcuLi9tb2RlbC9NZXNzYWdlQm94J1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuLi9tb2RlbC9NZXNzYWdlXCJcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgbWFpbkltYWdlIDtcclxuICBwdWJsaWMgc2VuZGVySW1hZ2UgO1xyXG4gIHB1YmxpYyBzZW5kZXJNZXNzYWdlIDtcclxuICBwdWJsaWMgZ3JpZENhcmRzIDogYW55O1xyXG4gIHB1YmxpYyBsb2dzIDogYW55O1xyXG4gIHB1YmxpYyByb3dzIDogYW55O1xyXG4gIHB1YmxpYyB1c2VyZGF0YSA6IGFueTtcclxuICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgaW1nc3JjIDogYW55O1xyXG4gIHB1YmxpYyB1c2VyTmFtZSA6IGFueTtcclxuICBwdWJsaWMgcHJvZmlsZVBpYyA6IGFueTtcclxuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICBwdWJsaWMgZnJpZW5kSWQgOiBhbnk7XHJcbiAgcHVibGljIGZyaWVuZERhdGEgOiBNZXNzYWdlQm94O1xyXG4gIHB1YmxpYyBpbWFnZSA6IGFueTtcclxuICBwdWJsaWMgaXNPbmxpbmUgOiBhbnk7XHJcbiAgcHVibGljIHVzZXJJZCA9IFwiZWZTaDBXZzlHeGRxTTJCU0oxZWFqOHpIRVpWMlwiO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50U3RhY2tcIikgY29udGVudFN0YWNrUmVmOiBFbGVtZW50UmVmOyBcclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2UgOiBEYXNoYm9hcmRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgRmlyZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hiYXNlIDogQ291Y2hkYlNlcnZpY2UpIHsgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICAvL2xldCBzdGFjayA9IDxTdGFja0xheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGdyaWRsYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50XHJcbiAgICB0aGlzLmdyaWRDYXJkcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIGxldCBkYXNoYm9hcmREYXRhID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hCb2FyZERhdGEoKTtcclxuICAgIHRoaXMubWFpbkltYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5tYWluSW1hZ2U7XHJcbiAgICB0aGlzLnNlbmRlckltYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5zZW5kZXJJbWFnZTtcclxuICAgIHRoaXMuc2VuZGVyTWVzc2FnZSA9IGRhc2hib2FyZERhdGEubWFpbkNhcmQuc2VuZGVyTWVzc2FnZTtcclxuICAgIHRoaXMuZ3JpZENhcmRzLnB1c2goZGFzaGJvYXJkRGF0YS5ncmlkQ2FyZCk7XHJcbiAgICB0aGlzLnJvd3MgPSB0aGlzLmNvdWNoYmFzZS5nZXRDb3VjaERhdGEoKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXHJcbiAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XHJcbiAgICB0aGlzLmltZ3NyYyA9IHRoaXMuUVJjb2RlLmdldEltYWdlRnJvbWJhc2U2NCh0aGlzLnVzZXJkYXRhLlFSY29kZSk7XHJcbiAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy51c2VyZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5wcm9maWxlUGljID0gdGhpcy5RUmNvZGUuZ2V0SW1hZ2VGcm9tYmFzZTY0KHRoaXMudXNlcmRhdGEucHJvZmlsZV9waWMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9ncygpOiB2b2lkXHJcbiAge1xyXG4gICAgdGhpcy5sb2dzID0gdGhpcy5GaXJlRGJTZXJ2aWNlLmxvZ3M7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb3VjaHVzZXIoKVxyXG4gIHtcclxuICAgIHRoaXMucm93cyA9IHRoaXMuY291Y2hiYXNlLmdldENvdWNoRGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSlcclxuICAgIHRoaXMudXNlcmRhdGEgPXRoaXMucm93c1swXS51c2VyZGF0YTtcclxuICAgIC8vdGhpcy5pbWdzcmMgPSB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyZGF0YS5lbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmltZ3NyYykpXHJcblxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcbiAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKClcclxuICB7XHJcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gIH1cclxuICBwdWJsaWMgQWRkRnJpZW5kQ2hlY2soKVxyXG4gIHtcclxuICAgIHRoaXMuZnJpZW5kSWQgPSBcInZWZzEwcmFMdVhmc3h4NExOZlBGSFNyTGJvTDJcIjtcclxuXHJcbiAgICAgXHJcbiAgICB0aGlzLkZpcmVEYlNlcnZpY2UuZ2V0RGF0YSgnL3VzZXJzLycrdGhpcy51c2VySWQrJy9tZXNzYWdlcy8nK3RoaXMuZnJpZW5kSWQpXHJcbiAgICAudGhlbihyZXN1bHQgPT4gey8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSlcclxuICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSE9IG51bGwpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmQgYWxyZWFkeSBhZGRlZFwiKVxyXG4gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNPbmxpbmUpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIHRoaXMuQWRkRnJpZW5kKClcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcikpO1xyXG4gIH1cclxuICBwdWJsaWMgQWRkRnJpZW5kKCk6IHZvaWRcclxuICB7XHJcbiAgICAvLyB0aGlzLlFSY29kZS5zY2FuQmFyY29kZSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgLy8gdGhpcy5mcmllbmRJZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgdGhpcy5mcmllbmRJZCA9IFwidlZnMTByYUx1WGZzeHg0TE5mUEZIU3JMYm9MMlwiO1xyXG5cclxuICAgICBcclxuICAgICAgdGhpcy5GaXJlRGJTZXJ2aWNlLmdldERhdGEoJy91c2Vycy8nK3RoaXMuZnJpZW5kSWQrJy9wcm9maWxlX3BpYycpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzT25saW5lKTtcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcclxuICAgICAgdGhpcy5GaXJlRGJTZXJ2aWNlLmdldERhdGEoJy91c2Vycy8nK3RoaXMuZnJpZW5kSWQrJy9pc09ubGluZScpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgIHRoaXMuaXNPbmxpbmUgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzT25saW5lKTtcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcclxuICAgICAgdGhpcy5jcmVhdGVGcmllbmQoKVxyXG4gICAgICB0aGlzLkZpcmVEYlNlcnZpY2UuYWRkRnJpZW5kKHRoaXMuZnJpZW5kSWQsdGhpcy5mcmllbmREYXRhLHRoaXMudXNlcklkKVxyXG4gICAgICBcclxuICAvLyAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgLy8gICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAvLyAgICB9XHJcbiAgLy8gICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjcmVhdGVGcmllbmQoKVxyXG4gIHtcclxuICAgIHRoaXMuZnJpZW5kRGF0YSA9e1xyXG4gICAgICAgY2hhdHMgOiBbXSxcclxuICAgICAgIGltZyA6IHRoaXMuaW1hZ2UsXHJcbiAgICAgICBpc09ubGluZSA6IHRoaXMuaXNPbmxpbmVcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19