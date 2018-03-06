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
            password: this.user.password,
            profile_pic: "",
            email: this.user.email,
            isOnline: true,
            firebaseID: "",
            QRcode: this.QRcode.generateBarcode(this.user.email),
            messages: ""
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFReEQ7SUFNRSwyQkFBb0IsU0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLE9BQXdCLEVBQVUsTUFBc0I7UUFGeEQsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRTFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUd0QiwwQ0FBMEM7SUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCSTtJQUVILGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBRUcsSUFBSSxDQUFDLFFBQVEsR0FBRTtZQUNiLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsUUFBUSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM3QixXQUFXLEVBQUcsRUFBRTtZQUNoQixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJO1lBQ2YsVUFBVSxFQUFHLEVBQUU7WUFDZixNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckQsUUFBUSxFQUFHLEVBQUU7U0FDZCxDQUFBO0lBQ0osQ0FBQztJQWhFVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBT2dDLHdDQUFpQjtZQUNYLHlCQUFnQjtZQUN4QixnQ0FBYyxFQUFtQiw4QkFBYTtPQVJqRSxpQkFBaUIsQ0FrRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcblxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXHJcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcHVibGljIHVzZXI6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBwYXNzd29yZCA6IHN0cmluZztcclxuICBwdWJsaWMgdXNlckRhdGEgOiBVc2VyRGF0YTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSA6dm9pZCB7IH1cclxuXHJcblxyXG4vLyB1bmNvbW1lbnQgd2hlbiB1c2luZyByZXN0cmF0aW9uIGZlYXR1cmVcclxuXHJcbiAvKiBzaWduVXAoKTogdm9pZFxyXG4gIHtcclxuICB0aGlzLmZic2VydmljZS5yZWdpc3RlclVzZXIoe1xyXG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxyXG4gICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICBcclxuICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcclxuICAgIHRvYXN0LnNob3coKTtcclxuICAgIHRoaXMuc2lnblVwQygpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBlcnJvck1lc3NhZ2UgPT4ge1xyXG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICAgXHJcbiAgfSovXHJcblxyXG4gIHNpZ25VcCgpOiB2b2lke1xyXG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICB0aGlzLmNvdWNoZGIuc2V0VXNlckRhdGEodGhpcy51c2VyRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKCkgOiBhbnlcclxuICB7XHJcbiAgICAgdGhpcy51c2VyRGF0YT0ge1xyXG4gICAgICAgbmFtZSA6IHRoaXMudXNlci5uYW1lLFxyXG4gICAgICAgcGFzc3dvcmQgOiB0aGlzLnVzZXIucGFzc3dvcmQsXHJcbiAgICAgICBwcm9maWxlX3BpYyA6IFwiXCIsXHJcbiAgICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgIGlzT25saW5lIDogdHJ1ZSxcclxuICAgICAgIGZpcmViYXNlSUQgOiBcIlwiLFxyXG4gICAgICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlci5lbWFpbCksXHJcbiAgICAgICBtZXNzYWdlcyA6IFwiXCJcclxuICAgICB9XHJcbiAgfVxyXG4gICBcclxufVxyXG4iXX0=