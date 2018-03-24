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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELHlFQUFxRTtBQUNyRSwyREFBNkM7QUFDN0MsOENBQTZDO0FBQzdDLHNEQUE2RDtBQVE3RDtJQUtFLHdCQUFvQixpQkFBcUMsRUFBUyxnQkFBa0M7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNDLENBQUM7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUM3QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0YsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDO2FBQ0osS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3BELHlDQUF5QztZQUN4QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQ1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FNd0Msd0NBQWlCLEVBQTJCLHlCQUFnQjtPQUx6RixjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIHVzZXI6IFVzZXJEYXRhO1xuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlQmFzZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICB9XG5cbiAgbG9naW4oKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIuZW1haWwgK1wiIFwiKyB0aGlzLnBhc3N3b3JkKVxuICAgIHRoaXMuZmlyZUJhc2VEYlNlcnZpY2UubG9naW5Vc2VyKHtcbiAgICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQgOiB0aGlzLnBhc3N3b3JkXG4gICAgfSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwibG9naW4gU3VjY2VzZnVsbFwiKTtcbiAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZGFzaGJvYXJkXCJdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9XG4gICAgICB9KTt9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiTG9naW4gRmFpbGVkLlRyeSBsYXRlclwiKTtcbiAgICAgICAvLyB0aGlzLnBhc3N3b3JkID0gSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19