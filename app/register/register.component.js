"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var imagepicker = require("nativescript-imagepicker");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb, QRcode, _changeDetectionRef) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.items = [];
        this.user = new UserData_1.UserData();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    // uncomment when using restration feature
    /* signUp(): void
     {
     this.fbservice.registerUser({
        email : this.user.email,
        password : this.password
      }).then(result => {
       //this.user.email = JSON.stringify(result);
       
      this.createUser();
       const toast = new Toasty("Registration Succesfull");
       toast.show();
       this.signUpC();
       this.routerExtensions.navigate(["/profile"], {
           transition: {
               name: "fade",
               duration: 2000,
               curve: "linear"
           }
         });
       },
       errorMessage => {
         //this.user.email = JSON.stringify(errorMessage);
         const toast = new Toasty("Registration Failed.Try later");
         toast.show();
       }
     );
      
     }*/
    RegisterComponent.prototype.signUp = function () {
        this.createUser();
        this.couchdb.setUserData(this.userData);
        this.routerExtensions.navigate(["/profile"], {
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
        this.userData = {
            name: this.user.name,
            profile_pic: this.profilePic,
            email: this.user.email,
            isOnline: true,
            firebaseID: "",
            QRcode: this.QRcode.generateBarcode(this.user.email),
            messages: "",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFDeEQsc0RBQXdEO0FBU3hEO0lBUUUsMkJBQW9CLFNBQTZCLEVBQzdCLGdCQUFrQyxFQUNsQyxPQUF3QixFQUFVLE1BQXNCLEVBQ3hELG1CQUFzQztRQUh0QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDeEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQU5uRCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBUWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUd0QiwwQ0FBMEM7SUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCSTtJQUVILGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxPQUFPLEdB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YW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XHJcbiAgcHVibGljIGl0ZW1zID0gW107XHJcbiAgcHVibGljIHByb2ZpbGVQaWMgOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSwgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgOnZvaWQgeyB9XHJcblxyXG5cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gLyogc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgXHJcbiAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB0aGlzLnNpZ25VcEMoKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgIFxyXG4gIH0qL1xyXG5cclxuICBzaWduVXAoKTogdm9pZHtcclxuICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbn1cclxuICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgX3RoYXQgPSB0aGlzO1xyXG4gIFxyXG4gICAgY29udGV4dFxyXG4gICAgLmF1dGhvcml6ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBbXTtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgIC8vIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0aW9uIGRvbmU6XCIpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCk9PiB7XHJcbiAgICAgICAgLy8gIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKVxyXG4gICAgICAgICAgLnRoZW4oKGltYWdlU291cmNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlUGljID1cclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7IC8vIE5VTExcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVyaTogXCIgKyBzZWxlY3RlZC51cmkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVVcmk6IFwiICsgc2VsZWN0ZWQuZmlsZVVyaSk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBzZWxlY3Rpb247XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICBcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYylcclxuICAgICAgICBfdGhhdC5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNyZWF0ZVVzZXIoKSA6IGFueVxyXG4gIHtcclxuICAgICB0aGlzLnVzZXJEYXRhPSB7XHJcbiAgICAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXHJcbiAgICAgICBwcm9maWxlX3BpYyA6IHRoaXMucHJvZmlsZVBpYyxcclxuICAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgICAgZmlyZWJhc2VJRCA6IFwiXCIsXHJcbiAgICAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmVtYWlsKSxcclxuICAgICAgIG1lc3NhZ2VzIDogXCJcIixcclxuICAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICAgfVxyXG4gIH1cclxuICAgXHJcbn1cclxuIl19