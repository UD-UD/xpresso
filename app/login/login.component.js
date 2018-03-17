"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var nativescript_toasty_1 = require("nativescript-toasty");
var user_1 = require("../model/user");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fireBaseDbService, routerExtensions) {
        this.fireBaseDbService = fireBaseDbService;
        this.routerExtensions = routerExtensions;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user.email + " " + this.user.password);
        this.fireBaseDbService.loginUser({
            email: this.user.email,
            password: this.user.password
        })
            .then(function (result) {
            var toast = new nativescript_toasty_1.Toasty("login Succesfull");
            toast.show();
            _this.routerExtensions.navigate(["/profile"], {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELHlFQUFxRTtBQUNyRSwyREFBNkM7QUFDN0Msc0NBQXFDO0FBQ3JDLHNEQUE2RDtBQVE3RDtJQUlFLHdCQUFvQixpQkFBcUMsRUFBUyxnQkFBa0M7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0MsQ0FBQztJQUVGLDhCQUFLLEdBQUw7UUFBQSxpQkFxQkM7UUFwQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUM5QixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxRQUFRO2lCQUNsQjthQUNGLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQzthQUNKLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNwRCx5Q0FBeUM7WUFDeEMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaENVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBS3dDLHdDQUFpQixFQUEyQix5QkFBZ0I7T0FKekYsY0FBYyxDQWlDMUI7SUFBRCxxQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlcic7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcHVibGljIHVzZXI6IFVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZUJhc2VEYlNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgfVxyXG5cclxuICBsb2dpbigpe1xyXG4gICAgY29uc29sZS5sb2codGhpcy51c2VyLmVtYWlsICtcIiBcIisgdGhpcy51c2VyLnBhc3N3b3JkKVxyXG4gICAgdGhpcy5maXJlQmFzZURiU2VydmljZS5sb2dpblVzZXIoe1xyXG4gICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQgOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJsb2dpbiBTdWNjZXNmdWxsXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJMb2dpbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICAgLy8gdGhpcy5wYXNzd29yZCA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=