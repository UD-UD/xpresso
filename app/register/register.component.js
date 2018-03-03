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
        var _this = this;
        this.fbservice.registerUser({
            email: this.user.email,
            password: this.user.password
        }).then(function (result) {
            _this.user.email = JSON.stringify(result);
        }, function (errorMessage) {
            _this.user.email = JSON.stringify(errorMessage);
            //this.logs = JSON.stringify(errorMessage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBRXpELHNDQUFrQztBQUNsQyx5RUFBa0U7QUFRbEU7SUFHRSwyQkFBb0IsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQW1CLENBQUM7SUFFcEIsa0NBQU0sR0FBTjtRQUFBLGlCQWVDO1FBYkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDekIsS0FBSyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN2QixRQUFRLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQ0QsVUFBQSxZQUFZO1lBQ1YsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQywyQ0FBMkM7UUFFN0MsQ0FBQyxDQUNKLENBQUM7SUFFQSxDQUFDO0lBeEJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJZ0Msd0NBQWlCO09BSHRDLGlCQUFpQixDQTBCN0I7SUFBRCx3QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVsL3VzZXInXG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZic2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKVxuICB9XG5cbiAgbmdPbkluaXQoKSA6dm9pZCB7IH1cblxuICBzaWduVXAoKTogdm9pZFxuICB7XG4gIHRoaXMuZmJzZXJ2aWNlLnJlZ2lzdGVyVXNlcih7XG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxuICAgICBwYXNzd29yZCA6IHRoaXMudXNlci5wYXNzd29yZFxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgIHRoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy51c2VyLmVtYWlsID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKTtcbiAgICAgIC8vdGhpcy5sb2dzID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKTtcbiAgXG4gICAgfVxuKTtcbiAgIFxuICB9XG4gICBcbn1cbiJdfQ==