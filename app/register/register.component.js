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
            //  DocId : this.DocId
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFReEQ7SUFPRSwyQkFBb0IsU0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLE9BQXdCLEVBQVUsTUFBc0I7UUFGeEQsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRTFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUd0QiwwQ0FBMEM7SUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCSTtJQUVILGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBRUcsSUFBSSxDQUFDLFFBQVEsR0FBRTtZQUNiLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsV0FBVyxFQUFHLEVBQUU7WUFDaEIsS0FBSyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN2QixRQUFRLEVBQUcsSUFBSTtZQUNmLFVBQVUsRUFBRyxFQUFFO1lBQ2YsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JELFFBQVEsRUFBRyxFQUFFO1lBQ2IsVUFBVSxFQUFHLElBQUk7WUFDbkIsc0JBQXNCO1NBQ3JCLENBQUE7SUFDSixDQUFDO0lBbEVVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FRZ0Msd0NBQWlCO1lBQ1gseUJBQWdCO1lBQ3hCLGdDQUFjLEVBQW1CLDhCQUFhO09BVGpFLGlCQUFpQixDQW9FN0I7SUFBRCx3QkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi9tb2RlbC9Vc2VyRGF0YSc7XHJcbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcclxuaW1wb3J0IHtRcmNvZGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XHJcbiAgcHVibGljIHBhc3N3b3JkIDogc3RyaW5nO1xyXG4gIHB1YmxpYyB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBEb2NJZCA6IE51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSA6dm9pZCB7IH1cclxuXHJcblxyXG4vLyB1bmNvbW1lbnQgd2hlbiB1c2luZyByZXN0cmF0aW9uIGZlYXR1cmVcclxuXHJcbiAvKiBzaWduVXAoKTogdm9pZFxyXG4gIHtcclxuICB0aGlzLmZic2VydmljZS5yZWdpc3RlclVzZXIoe1xyXG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxyXG4gICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICBcclxuICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcclxuICAgIHRvYXN0LnNob3coKTtcclxuICAgIHRoaXMuc2lnblVwQygpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBlcnJvck1lc3NhZ2UgPT4ge1xyXG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICAgXHJcbiAgfSovXHJcblxyXG4gIHNpZ25VcCgpOiB2b2lke1xyXG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgIHRoaXMuY291Y2hkYi5zZXRVc2VyRGF0YSh0aGlzLnVzZXJEYXRhKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSA6IGFueVxyXG4gIHtcclxuICAgICB0aGlzLnVzZXJEYXRhPSB7XHJcbiAgICAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXHJcbiAgICAgICBwcm9maWxlX3BpYyA6IFwiXCIsXHJcbiAgICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgIGlzT25saW5lIDogdHJ1ZSxcclxuICAgICAgIGZpcmViYXNlSUQgOiBcIlwiLFxyXG4gICAgICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlci5lbWFpbCksXHJcbiAgICAgICBtZXNzYWdlcyA6IFwiXCIsXHJcbiAgICAgICBpc0xvZ2dlZEluIDogdHJ1ZVxyXG4gICAgIC8vICBEb2NJZCA6IHRoaXMuRG9jSWRcclxuICAgICB9XHJcbiAgfVxyXG4gICBcclxufVxyXG4iXX0=