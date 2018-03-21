"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var imagepicker = require("nativescript-imagepicker");
var imageSource = require("tns-core-modules/image-source");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFDeEQsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQVE3RDtJQVFFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFObkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVFoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUdKLDBDQUEwQztJQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkJJO0lBRUgsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFB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QztDQUFBLEFBekhELElBeUhDO0FBekhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcblxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXHJcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcHVibGljIHVzZXI6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBwYXNzd29yZCA6IHN0cmluZztcclxuICBwdWJsaWMgdXNlckRhdGEgOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgcHJvZmlsZVBpYyA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gICAgdGhpcy5pdGVtc1swXSA9IGltYWdlU291cmNlLmZyb21GaWxlKFwifi9pbWFnZS9wZXJzb24uanBnXCIpXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIDp2b2lkIHtcclxuICAgIFxyXG4gICB9XHJcblxyXG5cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gLyogc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgXHJcbiAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB0aGlzLnNpZ25VcEMoKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgIFxyXG4gIH0qL1xyXG5cclxuICBzaWduVXAoKTogdm9pZHtcclxuICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbn1cclxuICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgX3RoYXQgPSB0aGlzO1xyXG4gIFxyXG4gICAgY29udGV4dFxyXG4gICAgLmF1dGhvcml6ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBbXTtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgIC8vIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0aW9uIGRvbmU6XCIpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCk9PiB7XHJcbiAgICAgICAgLy8gIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKVxyXG4gICAgICAgICAgLnRoZW4oKGltYWdlU291cmNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlUGljID1cclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7IC8vIE5VTExcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVyaTogXCIgKyBzZWxlY3RlZC51cmkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVVcmk6IFwiICsgc2VsZWN0ZWQuZmlsZVVyaSk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBzZWxlY3Rpb247XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICBcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYylcclxuICAgICAgICBfdGhhdC5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNyZWF0ZVVzZXIoKSA6IGFueVxyXG4gIHtcclxuICAgICB0aGlzLnVzZXJEYXRhPSB7XHJcbiAgICAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXHJcbiAgICAgICBwcm9maWxlX3BpYyA6IHRoaXMucHJvZmlsZVBpYyxcclxuICAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgICAgZmlyZWJhc2VJRCA6IFwiXCIsXHJcbiAgICAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmVtYWlsKSxcclxuICAgICAgIG1lc3NhZ2VzIDogXCJcIixcclxuICAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICAgfVxyXG4gIH1cclxuICAgXHJcbn1cclxuIl19