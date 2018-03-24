"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var couchdb_service_1 = require("./services/couchdb.service");
var router_1 = require("nativescript-angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(couchService, routerExtensions, fonticon) {
        this.couchService = couchService;
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
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
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService, router_1.RouterExtensions, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCxzREFBNkQ7QUFPN0Q7SUFFSSxzQkFBb0IsWUFBNkIsRUFBWSxnQkFBa0MsRUFBVSxRQUE0QjtRQUFqSCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBWSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBRSxDQUFDO0lBQ3hJLCtCQUFRLEdBQVI7UUFDSSxpR0FBaUc7UUFDakcsdUNBQXVDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0YsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztJQUNMLENBQUM7SUFmUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBSXFDLGdDQUFjLEVBQThCLHlCQUFnQixFQUFvQiw4Q0FBa0I7T0FGNUgsWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XHJcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3VjaFNlcnZpY2UgOiBDb3VjaGRiU2VydmljZSAsICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSl7fVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgICAgIGlmKHRoaXMuY291Y2hTZXJ2aWNlLmNoZWNrTG9nZ2VkSW5TdGF0dXMoKSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19