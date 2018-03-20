"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchdb_service_1 = require("./services/couchdb.service");
var router_1 = require("nativescript-angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(couchService, routerExtensions) {
        this.couchService = couchService;
        this.routerExtensions = routerExtensions;
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if (this.couchService.checkLoggedInStatus()) {
            this.routerExtensions.navigate(["/home"], {
                transition: {
                    name: "fade",
                    duration: 500,
                    curve: "linear"
                }
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService, router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTREO0FBQzVELHNEQUE2RDtBQU03RDtJQUVJLHNCQUFvQixZQUE2QixFQUFZLGdCQUFrQztRQUEzRSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBWSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUUsQ0FBQztJQUNsRywrQkFBUSxHQUFSO1FBQ0ksaUdBQWlHO1FBQ2pHLHVDQUF1QztRQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxRQUFRO2lCQUNsQjthQUNGLENBQUMsQ0FBQztRQUNULENBQUM7SUFDTCxDQUFDO0lBZlEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUdxQyxnQ0FBYyxFQUE4Qix5QkFBZ0I7T0FGdEYsWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvdWNoU2VydmljZSA6IENvdWNoZGJTZXJ2aWNlICwgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyl7fVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxuICAgICAgICBpZih0aGlzLmNvdWNoU2VydmljZS5jaGVja0xvZ2dlZEluU3RhdHVzKCkpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19