"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var nativescript_toasty_1 = require("nativescript-toasty");
var UserData_1 = require("../model/UserData");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fireBaseDbService, routerExtensions) {
        this.fireBaseDbService = fireBaseDbService;
        this.routerExtensions = routerExtensions;
        this.user = new UserData_1.UserData();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user.email + " " + this.password);
        this.fireBaseDbService.loginUser({
            email: this.user.email,
            password: this.password
        })
            .then(function (result) {
            var toast = new nativescript_toasty_1.Toasty("login Succesfull");
            toast.show();
            var x = _this.fireBaseDbService.getCurrentUser();
            console.log(JSON.stringify(x));
            _this.routerExtensions.navigate(["/dashboard"], {
                transition: {
                    name: "fade",
                    duration: 2000,
                    curve: "linear"
                }
            });
        })
            .catch(function (error) {
            var toast = new nativescript_toasty_1.Toasty("Login Failed.Try later");
            // this.password = JSON.stringify(error);
            toast.show();
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELHlFQUFxRTtBQUNyRSwyREFBNkM7QUFDN0MsOENBQTZDO0FBQzdDLHNEQUE2RDtBQVE3RDtJQUtFLHdCQUFvQixpQkFBcUMsRUFBUyxnQkFBa0M7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNDLENBQUM7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBdUJDO1FBdEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDN0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxRQUFRO2lCQUNsQjthQUNGLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQzthQUNKLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNwRCx5Q0FBeUM7WUFDeEMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkNVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBTXdDLHdDQUFpQixFQUEyQix5QkFBZ0I7T0FMekYsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XHJcbiAgcHVibGljIHBhc3N3b3JkIDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmVCYXNlRGJTZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICB9XHJcblxyXG4gIGxvZ2luKCl7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIuZW1haWwgK1wiIFwiKyB0aGlzLnBhc3N3b3JkKVxyXG4gICAgdGhpcy5maXJlQmFzZURiU2VydmljZS5sb2dpblVzZXIoe1xyXG4gICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQgOiB0aGlzLnBhc3N3b3JkXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwibG9naW4gU3VjY2VzZnVsbFwiKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgIHZhciB4ID0gdGhpcy5maXJlQmFzZURiU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHgpKVxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJMb2dpbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICAgLy8gdGhpcy5wYXNzd29yZCA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=