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
        this.fbservice.getData('/users/' + this.userData.firebaseID)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFDckUsMkRBQTZDO0FBRTdDLHNEQUE2RDtBQUU3RCwrREFBNEQ7QUFDNUQsNkRBQXdEO0FBQ3hELHNEQUF3RDtBQUN4RCwyREFBNkQ7QUFFN0QsMkNBQW1DO0FBRW5DLHdDQUFzQztBQVF0QztJQVVFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFQbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUdKLDBDQUEwQztJQUV6QyxrQ0FBTSxHQUFOO1FBQUEsaUJBNEJFO1FBMUJELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3pCLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ2IsMkNBQTJDO1lBQzNDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFH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ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcblxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXHJcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi9zYW1wbGV1c2VyXCJcclxuXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcHVibGljIHVzZXI6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBwYXNzd29yZCA6IHN0cmluZztcclxuICBwdWJsaWMgdXNlckRhdGEgOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgRG9jSWQgOiBOdW1iZXI7XHJcbiAgcHVibGljIGl0ZW1zID0gW107XHJcbiAgcHVibGljIHByb2ZpbGVQaWMgOiBhbnk7XHJcbiAgcHVibGljIGlzT25saW5lIDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZic2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlICxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3VjaGRiIDogQ291Y2hkYlNlcnZpY2UsIHByaXZhdGUgUVJjb2RlIDogUXJjb2RlU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyRGF0YSgpXHJcbiAgICB0aGlzLml0ZW1zWzBdID0gaW1hZ2VTb3VyY2UuZnJvbUZpbGUoXCJ+L2ltYWdlL3BlcnNvbi5qcGdcIilcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgOnZvaWQge1xyXG4gICAgXHJcbiAgIH1cclxuXHJcblxyXG4vLyB1bmNvbW1lbnQgd2hlbiB1c2luZyByZXN0cmF0aW9uIGZlYXR1cmVcclxuXHJcbiBzaWduVXAoKTogdm9pZFxyXG4gIHtcclxuICB0aGlzLmZic2VydmljZS5yZWdpc3RlclVzZXIoe1xyXG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxyXG4gICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB0aGlzLnVzZXIuZmlyZWJhc2VJRCA9IHJlc3VsdC51aWQ7XHJcbiAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB0aGlzLmZic2VydmljZS5zZXRVc2VyKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5zaWduVXBDKCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGVcIl0sIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBlcnJvck1lc3NhZ2UgPT4ge1xyXG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICAgXHJcbiAgfVxyXG5cclxuIHNpZ25VcEYoKTp2b2lke1xyXG4gIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gXHJcbiAgdGhpcy5mYnNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXJEYXRhKTtcclxuIHRoaXMuZmJzZXJ2aWNlLmdldERhdGEoJy91c2Vycy8nK3RoaXMudXNlckRhdGEuZmlyZWJhc2VJRCkgXHJcbiAudGhlbihyZXN1bHQgPT4gey8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSlcclxuICB0aGlzLmlzT25saW5lID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKVxyXG4gLy8gY29uc29sZS5sb2codGhpcy5pc09ubGluZSk7XHJcbiB0aGlzLmdldHN0YXR1cygpO1xyXG4gIFxyXG59KVxyXG4uY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcikpO1xyXG5cclxuXHJcbiB9XHJcbiBnZXRzdGF0dXMoKVxyXG4ge1xyXG4gIGNvbnNvbGUubG9nKHRoaXMuaXNPbmxpbmUpO1xyXG4gfVxyXG4gYWRkRnJpZW5kKClcclxuIHtcclxuXHJcbiB9XHJcbiAgc2lnblVwQygpOiB2b2lke1xyXG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICB0aGlzLmNvdWNoZGIuc2V0VXNlckRhdGEodGhpcy51c2VyRGF0YSk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25TZWxlY3RTaW5nbGVUYXAoKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG59XHJcbiAgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgbGV0IF90aGF0ID0gdGhpcztcclxuICBcclxuICAgIGNvbnRleHRcclxuICAgIC5hdXRob3JpemUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF90aGF0Lml0ZW1zID0gW107XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAvLyBfdGhhdC5wcm9maWxlUGljID0gXCJcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGlvbiBkb25lOlwiKTtcclxuICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWQpPT4ge1xyXG4gICAgICAgIC8vICBfdGhhdC5wcm9maWxlUGljID0gXCJcIjtcclxuICAgICAgICAgIHNlbGVjdGVkLmdldEltYWdlKClcclxuICAgICAgICAgIC50aGVuKChpbWFnZVNvdXJjZSkgPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZVBpYyA9XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlLnRvQmFzZTY0U3RyaW5nKFwianBnXCIpOyAvLyBOVUxMXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cmk6IFwiICsgc2VsZWN0ZWQudXJpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlVXJpOiBcIiArIHNlbGVjdGVkLmZpbGVVcmkpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIF90aGF0Lml0ZW1zID0gc2VsZWN0aW9uO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgXHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpXHJcbiAgICAgICAgX3RoYXQuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBjcmVhdGVVc2VyKCkgOiBhbnlcclxuICB7XHJcbiAgICAvLyAgdGhpcy51c2VyRGF0YT0ge1xyXG4gICAgLy8gICAgbmFtZSA6IHRoaXMudXNlci5uYW1lLFxyXG4gICAgLy8gICAgcHJvZmlsZV9waWMgOiBcIlwiLFxyXG4gICAgLy8gICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAvLyAgICBpc09ubGluZSA6IHRydWUsXHJcbiAgICAvLyAgICBmaXJlYmFzZUlEIDogXCJcIixcclxuICAgIC8vICAgIFFSY29kZSA6IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXIuZW1haWwpLFxyXG4gICAgLy8gICAgbWVzc2FnZXMgOiBcIlwiLFxyXG4gICAgLy8gICAgaXNMb2dnZWRJbiA6IHRydWVcclxuICAgIC8vICB9XHJcblxyXG4gICAgLy9jcmVhdGUgZGVtbyB1c2VyXHJcbiAgICBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLnBpbmt5LmltZyA9IFV0aWxzLmdlbmVyYXRlQmFzZTY0U3RyaW5nKFV0aWxzLnJlYWRJbWFnZSgpKTtcclxuICAgIGRhdGEudXNlcmRhdGEubWVzc2FnZXMudWpqYWwyLmltZyA9IFV0aWxzLmdlbmVyYXRlQmFzZTY0U3RyaW5nKFV0aWxzLnJlYWRJbWFnZSgpKTtcclxuICAgIFxyXG4gICAgdGhpcy51c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZSA6IHRoaXMudXNlci5uYW1lLFxyXG4gICAgICBwcm9maWxlX3BpYyA6IHRoaXMucHJvZmlsZVBpYyxcclxuICAgICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgIGlzT25saW5lIDogdHJ1ZSxcclxuICAgICAgZmlyZWJhc2VJRCA6IFwidlZnMTByYUx1WGZzeHg0TE5mUEZIU3JMYm9MMlwiLFxyXG4gICAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmZpcmViYXNlSUQpLFxyXG4gICAgICBtZXNzYWdlcyA6IGRhdGEudXNlcmRhdGEubWVzc2FnZXMsXHJcbiAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICBcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==