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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsOENBQTZDO0FBQzdDLCtEQUE0RDtBQUM1RCxzREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELHVFQUErRDtBQVMvRDtJQVNFLDhCQUFvQixnQkFBa0MsRUFDNUMsT0FBd0IsRUFBVSxNQUFzQixFQUFVLFFBQTRCO1FBRHBGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRXBHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEMsd0NBQXdDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUosdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFFO1lBQ2IsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixXQUFXLEVBQUcsRUFBRTtZQUNoQixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJO1lBQ2YsVUFBVSxFQUFHLEVBQUU7WUFDZixNQUFNLEVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzFCLFFBQVEsRUFBRyxFQUFFO1lBQ2IsVUFBVSxFQUFHLElBQUk7U0FHbEIsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEzQzJCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFrQixpQkFBVTtpRUFBQztJQVA3QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FVc0MseUJBQWdCO1lBQ2xDLGdDQUFjLEVBQW1CLDhCQUFhLEVBQW9CLDhDQUFrQjtPQVY3RixvQkFBb0IsQ0FxRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUXJjb2RlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWVkaXQtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICBwdWJsaWMgdXNlciA6IGFueTtcclxuICAgICBwdWJsaWMgcm93cyA6IGFueTtcclxuICAgICBwdWJsaWMgdXNlcmRhdGEgOiBhbnk7XHJcbiAgICAgcHVibGljIGRvY0lkIDogYW55O1xyXG4gICAgIHB1YmxpYyB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gICAgIHB1YmxpYyBwcm9maWxlUGljIDogYW55O1xyXG4gICAgIEBWaWV3Q2hpbGQoXCJwcm9maWxlUGljXCIpIGNvbnRlbnRTdGFja1JlZjogRWxlbWVudFJlZjsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG5cclxuICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcclxuICAgICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGRiLmdldENvdWNoRGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSlcclxuICAgICAgdGhpcy51c2VyZGF0YSA9dGhpcy5yb3dzWzBdLnVzZXJkYXRhO1xyXG4gICAgICB0aGlzLnVzZXIubmFtZSA9IHRoaXMudXNlcmRhdGEubmFtZTtcclxuICAgICAgdGhpcy51c2VyLnByb2ZpbGVfcGljID0gdGhpcy51c2VyZGF0YS5wcm9maWxlX3BpYztcclxuICAgICAgdGhpcy51c2VyLmVtYWlsID0gdGhpcy51c2VyZGF0YS5lbWFpbDtcclxuICAgICAgdGhpcy51c2VyLmlzT25saW5lID0gdGhpcy51c2VyZGF0YS5pc09ubGluZTtcclxuICAgICAgdGhpcy51c2VyLmZpcmViYXNlSUQgPSB0aGlzLnVzZXJkYXRhLmZpcmViYXNlSUQ7XHJcbiAgICAgIHRoaXMudXNlci5RUmNvZGUgPSB0aGlzLnVzZXJkYXRhLlFSY29kZTtcclxuICAgICAgdGhpcy51c2VyLm1lc3NhZ2VzID0gdGhpcy51c2VyZGF0YS5tZXNzYWdlcztcclxuICAgICAgdGhpcy51c2VyLmlzTG9nZ2VkSW4gPSB0aGlzLnVzZXJkYXRhLmlzTG9nZ2VkSW47XHJcbiAgICAgIHRoaXMuZG9jSWQgPSB0aGlzLnJvd3NbMF0uX2lkO1xyXG4gICAgLy90aGlzLnVzZXIuZG9jSWQgPSB0aGlzLnVzZXJkYXRhLkRvY0lkO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIubmFtZSlcclxuICAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMucm93cyA9IHRoaXMuY291Y2hkYi5nZXRDb3VjaERhdGEoKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXHJcbiAgICB0aGlzLnByb2ZpbGVQaWMgPSB0aGlzLlFSY29kZS5nZXRJbWFnZUZyb21iYXNlNjQodGhpcy51c2VyZGF0YS5wcm9maWxlX3BpYyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKVxyXG4gIHtcclxuICAgIHRoaXMudXNlckRhdGE9IHtcclxuICAgICAgbmFtZSA6IHRoaXMudXNlci5uYW1lLFxyXG4gICAgICBwcm9maWxlX3BpYyA6IFwiXCIsXHJcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICBpc09ubGluZSA6IHRydWUsXHJcbiAgICAgIGZpcmViYXNlSUQgOiBcIlwiLFxyXG4gICAgICBRUmNvZGUgOiAgdGhpcy51c2VyLlFSY29kZSxcclxuICAgICAgbWVzc2FnZXMgOiBcIlwiLFxyXG4gICAgICBpc0xvZ2dlZEluIDogdHJ1ZSxcclxuICAgIC8vICBEb2NJZCA6IHRoaXMudXNlci5kb2NJZFxyXG5cclxuICAgIH1cclxuICAgIHRoaXMuY291Y2hkYi51cGRhdGVVc2VyRGF0YSh0aGlzLmRvY0lkLCB0aGlzLnVzZXJEYXRhKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=