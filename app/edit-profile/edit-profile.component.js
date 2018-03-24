"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var couchdb_service_1 = require("../services/couchdb.service");
var router_1 = require("nativescript-angular/router");
var qrcode_service_1 = require("../services/qrcode.service");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(routerExtensions, couchdb, QRcode, fonticon) {
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
        this.fonticon = fonticon;
        this.user = new UserData_1.UserData();
        this.rows = this.couchdb.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        this.user.name = this.userdata.name;
        this.user.profile_pic = this.userdata.profile_pic;
        this.user.email = this.userdata.email;
        this.user.isOnline = this.userdata.isOnline;
        this.user.firebaseID = this.userdata.firebaseID;
        this.user.QRcode = this.userdata.QRcode;
        this.user.messages = this.userdata.messages;
        this.user.isLoggedIn = this.userdata.isLoggedIn;
        this.docId = this.rows[0]._id;
        //this.user.docId = this.userdata.DocId;
        console.log(this.user.name);
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.rows = this.couchdb.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.profilePic = this.QRcode.getImageFrombase64(this.userdata.profile_pic);
    };
    EditProfileComponent.prototype.update = function () {
        this.userData = {
            name: this.user.name,
            profile_pic: "",
            email: this.user.email,
            isOnline: true,
            firebaseID: "",
            QRcode: this.user.QRcode,
            messages: "",
            isLoggedIn: true,
        };
        this.couchdb.updateUserData(this.docId, this.userData);
    };
    __decorate([
        core_1.ViewChild("profilePic"),
        __metadata("design:type", core_1.ElementRef)
    ], EditProfileComponent.prototype, "contentStackRef", void 0);
    EditProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsOENBQTZDO0FBQzdDLCtEQUE0RDtBQUM1RCxzREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHVFQUErRDtBQVMvRDtJQVNFLDhCQUFvQixnQkFBa0MsRUFDNUMsT0FBd0IsRUFBVSxNQUFzQixFQUFVLFFBQTRCO1FBRHBGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRXBHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEMsd0NBQXdDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUosdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFFO1lBQ2IsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixXQUFXLEVBQUcsRUFBRTtZQUNoQixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJO1lBQ2YsVUFBVSxFQUFHLEVBQUU7WUFDZixNQUFNLEVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzFCLFFBQVEsRUFBRyxFQUFFO1lBQ2IsVUFBVSxFQUFHLElBQUk7U0FHbEIsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEzQzJCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFrQixpQkFBVTtpRUFBQztJQVA3QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FVc0MseUJBQWdCO1lBQ2xDLGdDQUFjLEVBQW1CLDhCQUFhLEVBQW9CLDhDQUFrQjtPQVY3RixvQkFBb0IsQ0FxRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFFyY29kZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1lZGl0LXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICBwdWJsaWMgdXNlciA6IGFueTtcbiAgICAgcHVibGljIHJvd3MgOiBhbnk7XG4gICAgIHB1YmxpYyB1c2VyZGF0YSA6IGFueTtcbiAgICAgcHVibGljIGRvY0lkIDogYW55O1xuICAgICBwdWJsaWMgdXNlckRhdGEgOiBVc2VyRGF0YTtcbiAgICAgcHVibGljIHByb2ZpbGVQaWMgOiBhbnk7XG4gICAgIEBWaWV3Q2hpbGQoXCJwcm9maWxlUGljXCIpIGNvbnRlbnRTdGFja1JlZjogRWxlbWVudFJlZjsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge1xuXG4gICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxuICAgICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGRiLmdldENvdWNoRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XG4gICAgICB0aGlzLnVzZXIubmFtZSA9IHRoaXMudXNlcmRhdGEubmFtZTtcbiAgICAgIHRoaXMudXNlci5wcm9maWxlX3BpYyA9IHRoaXMudXNlcmRhdGEucHJvZmlsZV9waWM7XG4gICAgICB0aGlzLnVzZXIuZW1haWwgPSB0aGlzLnVzZXJkYXRhLmVtYWlsO1xuICAgICAgdGhpcy51c2VyLmlzT25saW5lID0gdGhpcy51c2VyZGF0YS5pc09ubGluZTtcbiAgICAgIHRoaXMudXNlci5maXJlYmFzZUlEID0gdGhpcy51c2VyZGF0YS5maXJlYmFzZUlEO1xuICAgICAgdGhpcy51c2VyLlFSY29kZSA9IHRoaXMudXNlcmRhdGEuUVJjb2RlO1xuICAgICAgdGhpcy51c2VyLm1lc3NhZ2VzID0gdGhpcy51c2VyZGF0YS5tZXNzYWdlcztcbiAgICAgIHRoaXMudXNlci5pc0xvZ2dlZEluID0gdGhpcy51c2VyZGF0YS5pc0xvZ2dlZEluO1xuICAgICAgdGhpcy5kb2NJZCA9IHRoaXMucm93c1swXS5faWQ7XG4gICAgLy90aGlzLnVzZXIuZG9jSWQgPSB0aGlzLnVzZXJkYXRhLkRvY0lkO1xuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLm5hbWUpXG4gICAgIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGRiLmdldENvdWNoRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICAgdGhpcy5wcm9maWxlUGljID0gdGhpcy5RUmNvZGUuZ2V0SW1hZ2VGcm9tYmFzZTY0KHRoaXMudXNlcmRhdGEucHJvZmlsZV9waWMpO1xuICB9XG5cbiAgdXBkYXRlKClcbiAge1xuICAgIHRoaXMudXNlckRhdGE9IHtcbiAgICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcbiAgICAgIHByb2ZpbGVfcGljIDogXCJcIixcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgaXNPbmxpbmUgOiB0cnVlLFxuICAgICAgZmlyZWJhc2VJRCA6IFwiXCIsXG4gICAgICBRUmNvZGUgOiAgdGhpcy51c2VyLlFSY29kZSxcbiAgICAgIG1lc3NhZ2VzIDogXCJcIixcbiAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlLFxuICAgIC8vICBEb2NJZCA6IHRoaXMudXNlci5kb2NJZFxuXG4gICAgfVxuICAgIHRoaXMuY291Y2hkYi51cGRhdGVVc2VyRGF0YSh0aGlzLmRvY0lkLCB0aGlzLnVzZXJEYXRhKTtcbiAgfVxuXG5cbn1cbiJdfQ==