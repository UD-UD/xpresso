"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var sampleuser_1 = require("./sampleuser");
var Utils_1 = require("../utils/Utils");
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
            name: sampleuser_1.data.userdata.name,
            profile_pic: Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage()),
            email: sampleuser_1.data.userdata.email,
            isOnline: true,
            firebaseID: "ujjal1",
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
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFFeEQsMkNBQW1DO0FBRW5DLHdDQUFzQztBQVF0QztJQU1FLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQjtRQUZ4RCxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFFMUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQsb0NBQVEsR0FBUixjQUFtQixDQUFDO0lBR3RCLDBDQUEwQztJQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkJJO0lBRUgsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFFRSxvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qiw0REFBNEQ7UUFDNUQsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixLQUFLO1FBRUwsa0JBQWtCO1FBQ2xCLGlCQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGFBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRixpQkFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxhQUFLLENBQUMsb0JBQW9CLENBQUMsYUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLElBQUksRUFBRyxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3pCLFdBQVcsRUFBRyxhQUFLLENBQUMsb0JBQW9CLENBQUMsYUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNELEtBQUssRUFBRyxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQzNCLFFBQVEsRUFBRyxJQUFJO1lBQ2YsVUFBVSxFQUFHLFFBQVE7WUFDckIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxRQUFRLEVBQUcsaUJBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUNqQyxVQUFVLEVBQUcsSUFBSTtTQUNsQixDQUFBO0lBR0gsQ0FBQztJQWpGVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBT2dDLHdDQUFpQjtZQUNYLHlCQUFnQjtZQUN4QixnQ0FBYyxFQUFtQiw4QkFBYTtPQVJqRSxpQkFBaUIsQ0FtRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5GRCxJQW1GQztBQW5GWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi9tb2RlbC9Vc2VyRGF0YSc7XG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xuXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcbmltcG9ydCB7UXJjb2RlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3FyY29kZS5zZXJ2aWNlXCJcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL3NhbXBsZXVzZXJcIlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XG4gIHB1YmxpYyBwYXNzd29yZCA6IHN0cmluZztcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYnNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSAsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3VjaGRiIDogQ291Y2hkYlNlcnZpY2UsIHByaXZhdGUgUVJjb2RlIDogUXJjb2RlU2VydmljZSkge1xuXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcbiAgfVxuXG4gIG5nT25Jbml0KCkgOnZvaWQgeyB9XG5cblxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXG5cbiAvKiBzaWduVXAoKTogdm9pZFxuICB7XG4gIHRoaXMuZmJzZXJ2aWNlLnJlZ2lzdGVyVXNlcih7XG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcbiAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgXG4gICB0aGlzLmNyZWF0ZVVzZXIoKTtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcbiAgICB0b2FzdC5zaG93KCk7XG4gICAgdGhpcy5zaWduVXBDKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcbiAgICAgIHRvYXN0LnNob3coKTtcbiAgICB9XG4gICk7XG4gICBcbiAgfSovXG5cbiAgc2lnblVwKCk6IHZvaWR7XG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xuICB9XG5cbiAgY3JlYXRlVXNlcigpIDogYW55XG4gIHtcbiAgICAvLyAgdGhpcy51c2VyRGF0YT0ge1xuICAgIC8vICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcbiAgICAvLyAgICBwcm9maWxlX3BpYyA6IFwiXCIsXG4gICAgLy8gICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgLy8gICAgaXNPbmxpbmUgOiB0cnVlLFxuICAgIC8vICAgIGZpcmViYXNlSUQgOiBcIlwiLFxuICAgIC8vICAgIFFSY29kZSA6IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXIuZW1haWwpLFxuICAgIC8vICAgIG1lc3NhZ2VzIDogXCJcIixcbiAgICAvLyAgICBpc0xvZ2dlZEluIDogdHJ1ZVxuICAgIC8vICB9XG5cbiAgICAvL2NyZWF0ZSBkZW1vIHVzZXJcbiAgICBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLnBpbmt5LmltZyA9IFV0aWxzLmdlbmVyYXRlQmFzZTY0U3RyaW5nKFV0aWxzLnJlYWRJbWFnZSgpKTtcbiAgICBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLnVqamFsMi5pbWcgPSBVdGlscy5nZW5lcmF0ZUJhc2U2NFN0cmluZyhVdGlscy5yZWFkSW1hZ2UoKSk7XG4gICAgXG4gICAgdGhpcy51c2VyRGF0YSA9IHtcbiAgICAgIG5hbWUgOiBkYXRhLnVzZXJkYXRhLm5hbWUsXG4gICAgICBwcm9maWxlX3BpYyA6IFV0aWxzLmdlbmVyYXRlQmFzZTY0U3RyaW5nKFV0aWxzLnJlYWRJbWFnZSgpKSxcbiAgICAgIGVtYWlsIDogZGF0YS51c2VyZGF0YS5lbWFpbCxcbiAgICAgIGlzT25saW5lIDogdHJ1ZSxcbiAgICAgIGZpcmViYXNlSUQgOiBcInVqamFsMVwiLFxuICAgICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKGRhdGEudXNlcmRhdGEuZW1haWwpLFxuICAgICAgbWVzc2FnZXMgOiBkYXRhLnVzZXJkYXRhLm1lc3NhZ2VzLFxuICAgICAgaXNMb2dnZWRJbiA6IHRydWVcbiAgICB9XG5cbiAgIFxuICB9XG4gICBcbn1cbiJdfQ==