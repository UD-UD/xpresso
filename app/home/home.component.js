"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase) {
        this.firebase = firebase;
        this.data = "Fb Data";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.check = function () {
        console.log('clicked');
        var user = {
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };
        this.firebase.registerUser(user);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFPckU7SUFHSSx1QkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFEekMsU0FBSSxHQUFFLFNBQVMsQ0FBQztJQUV2QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUl2QixJQUFJLElBQUksR0FBRTtZQUNOLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFdBQVc7U0FDeEIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFyQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJaUMsd0NBQWlCO09BSHZDLGFBQWEsQ0FzQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBkYXRhID1cIkZiIERhdGFcIjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2UgOiBGaXJlQmFzZURiU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdXNlciA9e1xyXG4gICAgICAgICAgICBlbWFpbDogJ2R1dHRhdWpqYWwxNDNAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcxMjM0I2FiY2QnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5maXJlYmFzZS5yZWdpc3RlclVzZXIodXNlcik7XHJcbiAgICB9XHJcbn1cclxuIl19