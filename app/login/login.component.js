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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELHlFQUFxRTtBQUNyRSwyREFBNkM7QUFDN0MsOENBQTZDO0FBQzdDLHNEQUE2RDtBQVE3RDtJQUtFLHdCQUFvQixpQkFBcUMsRUFBUyxnQkFBa0M7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNDLENBQUM7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0YsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDO2FBQ0osS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3BELHlDQUF5QztZQUN4QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQ1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FNd0Msd0NBQWlCLEVBQTJCLHlCQUFnQjtPQUx6RixjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZUJhc2VEYlNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIH1cclxuXHJcbiAgbG9naW4oKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXNlci5lbWFpbCArXCIgXCIrIHRoaXMucGFzc3dvcmQpXHJcbiAgICB0aGlzLmZpcmVCYXNlRGJTZXJ2aWNlLmxvZ2luVXNlcih7XHJcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJsb2dpbiBTdWNjZXNmdWxsXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJMb2dpbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICAgLy8gdGhpcy5wYXNzd29yZCA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=