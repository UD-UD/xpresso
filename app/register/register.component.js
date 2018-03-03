"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../model/user");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice) {
        this.fbservice = fbservice;
        this.user = new user_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.signUp = function () {
        console.log(JSON.stringify(this.user));
        this.fbservice.registerUser({
            email: this.user.email,
            password: this.user.password
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELHNDQUFrQztBQUNsQyx5RUFBa0U7QUFRbEU7SUFHRSwyQkFBb0IsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQW1CLENBQUM7SUFFcEIsa0NBQU0sR0FBTjtRQUdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUN6QixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDOUIsQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQWxCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBSWdDLHdDQUFpQjtPQUh0QyxpQkFBaUIsQ0FvQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWwvdXNlcidcclxuaW1wb3J0IHtGaXJlQmFzZURiU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyB1c2VyOiBVc2VyO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UpIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgOnZvaWQgeyB9XHJcblxyXG4gIHNpZ25VcCgpOiB2b2lkXHJcbiAge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKVxyXG4gIHRoaXMuZmJzZXJ2aWNlLnJlZ2lzdGVyVXNlcih7XHJcbiAgICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgcGFzc3dvcmQgOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgfSlcclxuICAgXHJcbiAgfVxyXG4gICBcclxufVxyXG4iXX0=