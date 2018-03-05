"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.user = new UserData_1.UserData();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    /*signUp(): void
    {
    this.fbservice.registerUser({
       email : this.user.email,
       password : this.password
     }).then(result => {
      //this.user.email = JSON.stringify(result);
      const toast = new Toasty("Registration Succesfull");
      toast.show();
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
        this.couchdb.setUserData(this.user);
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
            couchdb_service_1.CouchdbService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQVE1RDtJQUtFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0I7UUFGeEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQW1CLENBQUM7SUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUVILGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTFDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBTWdDLHdDQUFpQjtZQUNYLHlCQUFnQjtZQUN4QixnQ0FBYztPQVBqQyxpQkFBaUIsQ0E0QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi9tb2RlbC9Vc2VyRGF0YSc7XG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xuXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcbiAgcHVibGljIHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxuICB9XG5cbiAgbmdPbkluaXQoKSA6dm9pZCB7IH1cblxuICAvKnNpZ25VcCgpOiB2b2lkXG4gIHtcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcbiAgICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vdGhpcy51c2VyLmVtYWlsID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcbiAgICB0b2FzdC5zaG93KCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcbiAgICAgIHRvYXN0LnNob3coKTtcbiAgICB9XG4gICk7XG4gICBcbiAgfSovXG5cbiAgc2lnblVwKCk6IHZvaWR7XG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlcik7XG4gIH1cbiAgIFxufVxuIl19