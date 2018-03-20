"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var label_1 = require("ui/label");
var grid_layout_1 = require("ui/layouts/grid-layout");
var dashboard_service_1 = require("../services/dashboard.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, dashboardService) {
        this.page = page;
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var stack = this.contentStackRef.nativeElement;
        var lable = new label_1.Label();
        lable.text = "Ujjal";
        var card1 = elementRegistryModule.getViewClass("CardView");
        var card2 = new card1();
        var gl = new grid_layout_1.GridLayout();
        gl.addChild(lable);
        this.dashboardService.init();
    };
    __decorate([
        core_1.ViewChild("contentStack"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "contentStackRef", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFDL0Isa0NBQWlDO0FBRWpDLHNEQUFxRDtBQUNyRCxtRUFBOEQ7QUFTOUQ7SUFRRSw0QkFBb0IsSUFBVyxFQUFTLGdCQUFtQztRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtJQUMzRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksS0FBSyxHQUFnQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUM1RCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksS0FBSyxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFmMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWtCLGlCQUFVOytEQUFDO0lBTjVDLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FVMkIsV0FBSSxFQUE0QixvQ0FBZ0I7T0FSaEUsa0JBQWtCLENBc0I5QjtJQUFELHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xuY29uc3QgY2FyZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcgO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2Rhc2hib2FyZC5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG1haW5JbWFnZSA7XG4gIHB1YmxpYyBzZW5kZXJJbWFnZSA7XG4gIHB1YmxpYyBzZW5kZXJNZXNzYWdlIDtcblxuICBAVmlld0NoaWxkKFwiY29udGVudFN0YWNrXCIpIGNvbnRlbnRTdGFja1JlZjogRWxlbWVudFJlZjsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSxwcml2YXRlIGRhc2hib2FyZFNlcnZpY2UgOiBEYXNoYm9hcmRTZXJ2aWNlKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIGxldCBzdGFjayA9IDxTdGFja0xheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBsYWJsZSA9IG5ldyBMYWJlbCgpO1xuICAgIGxhYmxlLnRleHQgPSBcIlVqamFsXCI7XG4gICAgbGV0IGNhcmQxID0gZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLmdldFZpZXdDbGFzcyhcIkNhcmRWaWV3XCIpO1xuICAgIGxldCBjYXJkMiA9IG5ldyBjYXJkMSgpO1xuICAgIGxldCBnbCA9IG5ldyBHcmlkTGF5b3V0KCk7XG4gICAgZ2wuYWRkQ2hpbGQobGFibGUpO1xuXG4gICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmluaXQoKTtcbiAgfVxufVxuIl19