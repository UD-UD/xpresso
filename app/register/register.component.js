"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb, QRcode) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
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
    };
    RegisterComponent.prototype.createUser = function () {
        this.userData = {
            name: this.user.name,
            profile_pic: "",
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
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFReEQ7SUFNRSwyQkFBb0IsU0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLE9BQXdCLEVBQVUsTUFBc0I7UUFGeEQsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRTFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUd0QiwwQ0FBMEM7SUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCSTtJQUVILGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBRUcsSUFBSSxDQUFDLFFBQVEsR0FBRTtZQUNiLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsV0FBVyxFQUFHLEVBQUU7WUFDaEIsS0FBSyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN2QixRQUFRLEVBQUcsSUFBSTtZQUNmLFVBQVUsRUFBRyxFQUFFO1lBQ2YsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JELFFBQVEsRUFBRyxFQUFFO1lBQ2IsVUFBVSxFQUFHLElBQUk7U0FDbEIsQ0FBQTtJQUNKLENBQUM7SUFoRVUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQU9nQyx3Q0FBaUI7WUFDWCx5QkFBZ0I7WUFDeEIsZ0NBQWMsRUFBbUIsOEJBQWE7T0FSakUsaUJBQWlCLENBa0U3QjtJQUFELHdCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSwgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgOnZvaWQgeyB9XHJcblxyXG5cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gLyogc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgXHJcbiAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB0aGlzLnNpZ25VcEMoKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgIFxyXG4gIH0qL1xyXG5cclxuICBzaWduVXAoKTogdm9pZHtcclxuICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIDogYW55XHJcbiAge1xyXG4gICAgIHRoaXMudXNlckRhdGE9IHtcclxuICAgICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgICAgIHByb2ZpbGVfcGljIDogXCJcIixcclxuICAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgICAgZmlyZWJhc2VJRCA6IFwiXCIsXHJcbiAgICAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUodGhpcy51c2VyLmVtYWlsKSxcclxuICAgICAgIG1lc3NhZ2VzIDogXCJcIixcclxuICAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlXHJcbiAgICAgfVxyXG4gIH1cclxuICAgXHJcbn1cclxuIl19