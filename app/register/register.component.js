"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var nativescript_toasty_1 = require("nativescript-toasty");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var imagepicker = require("nativescript-imagepicker");
var imageSource = require("tns-core-modules/image-source");
var sampleuser_1 = require("./sampleuser");
var Utils_1 = require("../utils/Utils");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb, QRcode, _changeDetectionRef) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.items = [];
        this.user = new UserData_1.UserData();
        this.items[0] = imageSource.fromFile("~/image/person.jpg");
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // uncomment when using restration feature
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.fbservice.registerUser({
            email: this.user.email,
            password: this.password
        }).then(function (result) {
            //this.user.email = JSON.stringify(result);
            _this.user.firebaseID = result.uid;
            _this.createUser();
            var toast = new nativescript_toasty_1.Toasty("Registration Succesfull");
            toast.show();
            _this.fbservice.setUser(_this.userData);
            _this.signUpC();
            _this.routerExtensions.navigate(["/profile"], {
                transition: {
                    name: "fade",
                    duration: 2000,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            //this.user.email = JSON.stringify(errorMessage);
            var toast = new nativescript_toasty_1.Toasty("Registration Failed.Try later");
            toast.show();
        });
    };
    RegisterComponent.prototype.signUpF = function () {
        var _this = this;
        this.createUser();
        this.fbservice.setUser(this.userData);
        this.fbservice.getData('/users/' + this.userData.firebaseID + '/profile_pic')
            .then(function (result) {
            _this.isOnline = JSON.stringify(result.value);
            // console.log(this.isOnline);
            _this.getstatus();
        })
            .catch(function (error) { return console.log("Error: " + error); });
    };
    RegisterComponent.prototype.getstatus = function () {
        console.log(this.isOnline);
    };
    RegisterComponent.prototype.addFriend = function () {
    };
    RegisterComponent.prototype.signUpC = function () {
        this.createUser();
        this.couchdb.setUserData(this.userData);
        this.routerExtensions.navigate(["/dashboard"], {
            transition: {
                name: "fade",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    RegisterComponent.prototype.onSelectSingleTap = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    RegisterComponent.prototype.startSelection = function (context) {
        var _this = this;
        var _that = this;
        context
            .authorize()
            .then(function () {
            _that.items = [];
            return context.present();
        })
            .then(function (selection) {
            // _that.profilePic = "";
            console.log("Selection done:");
            selection.forEach(function (selected) {
                //  _that.profilePic = "";
                selected.getImage()
                    .then(function (imageSource) {
                    _this.profilePic =
                        imageSource.toBase64String("jpg"); // NULL
                    console.log(_this.profilePic);
                });
                console.log("----------------");
                console.log("uri: " + selected.uri);
                console.log("fileUri: " + selected.fileUri);
                console.log(_this.profilePic);
            });
            _that.items = selection;
            // console.log(this.profilePic);
            console.log(_this.profilePic);
            _that._changeDetectionRef.detectChanges();
        }).catch(function (e) {
            console.log(e);
        });
    };
    RegisterComponent.prototype.createUser = function () {
        //  this.userData= {
        //    name : this.user.name,
        //    profile_pic : "",
        //    email : this.user.email,
        //    isOnline : true,
        //    firebaseID : "",
        //    QRcode : this.QRcode.generateBarcode(this.user.email),
        //    messages : "",
        //    isLoggedIn : true
        //  }
        //create demo user
        sampleuser_1.data.userdata.messages.pinky.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        sampleuser_1.data.userdata.messages.ujjal2.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        this.userData = {
            name: this.user.name,
            profile_pic: this.profilePic,
            email: this.user.email,
            isOnline: true,
            firebaseID: "vVg10raLuXfsxx4LNfPFHSrLboL2",
            QRcode: this.QRcode.generateBarcode(this.user.firebaseID),
            messages: sampleuser_1.data.userdata.messages,
            isLoggedIn: true
        };
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService,
            router_1.RouterExtensions,
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService,
            core_1.ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFDckUsMkRBQTZDO0FBRTdDLHNEQUE2RDtBQUU3RCwrREFBNEQ7QUFDNUQsNkRBQXdEO0FBQ3hELHNEQUF3RDtBQUN4RCwyREFBNkQ7QUFFN0QsMkNBQW1DO0FBRW5DLHdDQUFzQztBQVF0QztJQVVFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFQbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUdKLDBDQUEwQztJQUV6QyxrQ0FBTSxHQUFOO1FBQUEsaUJBNEJFO1FBMUJELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3pCLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ2IsMkNBQTJDO1lBQzNDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFH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IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcblxyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vc2FtcGxldXNlclwiXHJcblxyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XHJcbiAgcHVibGljIERvY0lkIDogTnVtYmVyO1xyXG4gIHB1YmxpYyBpdGVtcyA9IFtdO1xyXG4gIHB1YmxpYyBwcm9maWxlUGljIDogYW55O1xyXG4gIHB1YmxpYyBpc09ubGluZSA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gICAgdGhpcy5pdGVtc1swXSA9IGltYWdlU291cmNlLmZyb21GaWxlKFwifi9pbWFnZS9wZXJzb24uanBnXCIpXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIDp2b2lkIHtcclxuICAgIFxyXG4gICB9XHJcblxyXG5cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgdGhpcy51c2VyLmZpcmViYXNlSUQgPSByZXN1bHQudWlkO1xyXG4gICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBTdWNjZXNmdWxsXCIpO1xyXG4gICAgdG9hc3Quc2hvdygpO1xyXG4gICAgdGhpcy5mYnNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXJEYXRhKTtcclxuICAgIHRoaXMuc2lnblVwQygpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiBzaWduVXBGKCk6dm9pZHtcclxuICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuIFxyXG4gIHRoaXMuZmJzZXJ2aWNlLnNldFVzZXIodGhpcy51c2VyRGF0YSk7XHJcbiB0aGlzLmZic2VydmljZS5nZXREYXRhKCcvdXNlcnMvJyt0aGlzLnVzZXJEYXRhLmZpcmViYXNlSUQrJy9wcm9maWxlX3BpYycpIFxyXG4gLnRoZW4ocmVzdWx0ID0+IHsvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpXHJcbiAgdGhpcy5pc09ubGluZSA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSlcclxuIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNPbmxpbmUpO1xyXG4gdGhpcy5nZXRzdGF0dXMoKTtcclxuICBcclxufSlcclxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcclxuXHJcblxyXG4gfVxyXG4gZ2V0c3RhdHVzKClcclxuIHtcclxuICBjb25zb2xlLmxvZyh0aGlzLmlzT25saW5lKTtcclxuIH1cclxuIGFkZEZyaWVuZCgpXHJcbiB7XHJcblxyXG4gfVxyXG4gIHNpZ25VcEMoKTogdm9pZHtcclxuICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxufVxyXG4gIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgIGxldCBfdGhhdCA9IHRoaXM7XHJcbiAgXHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgLy8gX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTpcIik7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKT0+IHtcclxuICAgICAgICAvLyAgX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpXHJcbiAgICAgICAgICAudGhlbigoaW1hZ2VTb3VyY2UpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVQaWMgPVxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTsgLy8gTlVMTFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJpOiBcIiArIHNlbGVjdGVkLnVyaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZVVyaTogXCIgKyBzZWxlY3RlZC5maWxlVXJpKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IHNlbGVjdGlvbjtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XHJcbiAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKVxyXG4gICAgICAgIF90aGF0Ll9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIFxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY3JlYXRlVXNlcigpIDogYW55XHJcbiAge1xyXG4gICAgLy8gIHRoaXMudXNlckRhdGE9IHtcclxuICAgIC8vICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgIC8vICAgIHByb2ZpbGVfcGljIDogXCJcIixcclxuICAgIC8vICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgLy8gICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgLy8gICAgZmlyZWJhc2VJRCA6IFwiXCIsXHJcbiAgICAvLyAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmVtYWlsKSxcclxuICAgIC8vICAgIG1lc3NhZ2VzIDogXCJcIixcclxuICAgIC8vICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICAvLyAgfVxyXG5cclxuICAgIC8vY3JlYXRlIGRlbW8gdXNlclxyXG4gICAgZGF0YS51c2VyZGF0YS5tZXNzYWdlcy5waW5reS5pbWcgPSBVdGlscy5nZW5lcmF0ZUJhc2U2NFN0cmluZyhVdGlscy5yZWFkSW1hZ2UoKSk7XHJcbiAgICBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLnVqamFsMi5pbWcgPSBVdGlscy5nZW5lcmF0ZUJhc2U2NFN0cmluZyhVdGlscy5yZWFkSW1hZ2UoKSk7XHJcbiAgICBcclxuICAgIHRoaXMudXNlckRhdGEgPSB7XHJcbiAgICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgICAgcHJvZmlsZV9waWMgOiB0aGlzLnByb2ZpbGVQaWMsXHJcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICBpc09ubGluZSA6IHRydWUsXHJcbiAgICAgIGZpcmViYXNlSUQgOiBcInZWZzEwcmFMdVhmc3h4NExOZlBGSFNyTGJvTDJcIixcclxuICAgICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlci5maXJlYmFzZUlEKSxcclxuICAgICAgbWVzc2FnZXMgOiBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLFxyXG4gICAgICBpc0xvZ2dlZEluIDogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgfVxyXG4gICBcclxufVxyXG4iXX0=