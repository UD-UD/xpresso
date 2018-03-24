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
        this.createUser();
        this.fbservice.getOnlineStatus(this.userData.firebaseID);
        this.fbservice.setUser(this.userData);
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
            QRcode: this.QRcode.generateBarcode(sampleuser_1.data.userdata.email),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFDckUsMkRBQTZDO0FBRTdDLHNEQUE2RDtBQUU3RCwrREFBNEQ7QUFDNUQsNkRBQXdEO0FBQ3hELHNEQUF3RDtBQUN4RCwyREFBNkQ7QUFFN0QsMkNBQW1DO0FBRW5DLHdDQUFzQztBQVF0QztJQVNFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFObkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVFoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUdKLDBDQUEwQztJQUV6QyxrQ0FBTSxHQUFOO1FBQUEsaUJBNEJFO1FBMUJELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3pCLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ2IsMkNBQTJDO1lBRTVDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNq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QyxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxRQUFRLEVBQUcsaUJBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUNqQyxVQUFVLEVBQUcsSUFBSTtTQUNsQixDQUFBO0lBR0gsQ0FBQztJQTlJVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBVWdDLHdDQUFpQjtZQUNYLHlCQUFnQjtZQUN4QixnQ0FBYyxFQUFtQiw4QkFBYTtZQUNuQyx3QkFBaUI7T0FaL0MsaUJBQWlCLENBZ0o3QjtJQUFELHdCQUFDO0NBQUEsQUFoSkQsSUFnSkM7QUFoSlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi9tb2RlbC9Vc2VyRGF0YSc7XHJcbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcclxuaW1wb3J0IHtRcmNvZGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL3NhbXBsZXVzZXJcIlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XHJcbiAgcHVibGljIHBhc3N3b3JkIDogc3RyaW5nO1xyXG4gIHB1YmxpYyB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBEb2NJZCA6IE51bWJlcjtcclxuICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgcHJvZmlsZVBpYyA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gICAgdGhpcy5pdGVtc1swXSA9IGltYWdlU291cmNlLmZyb21GaWxlKFwifi9pbWFnZS9wZXJzb24uanBnXCIpXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIDp2b2lkIHtcclxuICAgIFxyXG4gICB9XHJcblxyXG5cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgXHJcbiAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB0aGlzLmZic2VydmljZS5zZXRVc2VyKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5zaWduVXBDKCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGVcIl0sIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgIC8vdGhpcy51c2VyLmVtYWlsID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIEZhaWxlZC5UcnkgbGF0ZXJcIik7XHJcbiAgICAgIHRvYXN0LnNob3coKTtcclxuICAgIH1cclxuICApO1xyXG4gICBcclxuICB9XHJcbnNpZ25VcEYoKTp2b2lke1xyXG4gIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gIHRoaXMuZmJzZXJ2aWNlLmdldE9ubGluZVN0YXR1cyh0aGlzLnVzZXJEYXRhLmZpcmViYXNlSUQpXHJcbiAgdGhpcy5mYnNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXJEYXRhKTtcclxufVxyXG4gIHNpZ25VcEMoKTogdm9pZHtcclxuICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxufVxyXG4gIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgIGxldCBfdGhhdCA9IHRoaXM7XHJcbiAgXHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgLy8gX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTpcIik7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKT0+IHtcclxuICAgICAgICAvLyAgX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpXHJcbiAgICAgICAgICAudGhlbigoaW1hZ2VTb3VyY2UpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVQaWMgPVxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTsgLy8gTlVMTFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJpOiBcIiArIHNlbGVjdGVkLnVyaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZVVyaTogXCIgKyBzZWxlY3RlZC5maWxlVXJpKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IHNlbGVjdGlvbjtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XHJcbiAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKVxyXG4gICAgICAgIF90aGF0Ll9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIFxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY3JlYXRlVXNlcigpIDogYW55XHJcbiAge1xyXG4gICAgLy8gIHRoaXMudXNlckRhdGE9IHtcclxuICAgIC8vICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgIC8vICAgIHByb2ZpbGVfcGljIDogXCJcIixcclxuICAgIC8vICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgLy8gICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgLy8gICAgZmlyZWJhc2VJRCA6IFwiXCIsXHJcbiAgICAvLyAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmVtYWlsKSxcclxuICAgIC8vICAgIG1lc3NhZ2VzIDogXCJcIixcclxuICAgIC8vICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICAvLyAgfVxyXG5cclxuICAgIC8vY3JlYXRlIGRlbW8gdXNlclxyXG4gICAgZGF0YS51c2VyZGF0YS5tZXNzYWdlcy5waW5reS5pbWcgPSBVdGlscy5nZW5lcmF0ZUJhc2U2NFN0cmluZyhVdGlscy5yZWFkSW1hZ2UoKSk7XHJcbiAgICBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLnVqamFsMi5pbWcgPSBVdGlscy5nZW5lcmF0ZUJhc2U2NFN0cmluZyhVdGlscy5yZWFkSW1hZ2UoKSk7XHJcbiAgICBcclxuICAgIHRoaXMudXNlckRhdGEgPSB7XHJcbiAgICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgICAgcHJvZmlsZV9waWMgOiB0aGlzLnByb2ZpbGVQaWMsXHJcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICBpc09ubGluZSA6IHRydWUsXHJcbiAgICAgIGZpcmViYXNlSUQgOiBcInZWZzEwcmFMdVhmc3h4NExOZlBGSFNyTGJvTDJcIixcclxuICAgICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKGRhdGEudXNlcmRhdGEuZW1haWwpLFxyXG4gICAgICBtZXNzYWdlcyA6IGRhdGEudXNlcmRhdGEubWVzc2FnZXMsXHJcbiAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICBcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==