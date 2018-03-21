"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var dashboard_service_1 = require("../services/dashboard.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, dashboardService) {
        this.page = page;
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // let stack = <StackLayout>this.contentStackRef.nativeElement;
        // let lable = new Label()ß
        // lable.text = "Ujjal";
        // let card1 = elementRegistryModule.getViewClass("CardView");
        // let card2 = new card1();
        // let gl = new GridLayout();
        // gl.addChild(lable);
        // this.dashboardService.init();
        // let gridlayout = <GridLayout>this.contentStackRef.nativeElement
        // this.gridCards = new ObservableArray();
        this.dashboardData = this.dashboardService.getDashBoardData();
        this.mainImage = this.dashboardData.mainCard.mainImage;
        this.senderImage = this.dashboardData.mainCard.senderImage;
        this.senderMessage = this.dashboardData.mainCard.senderMessage;
        this.gridCards = this.dashboardData.gridCard;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBY2hFO0lBVUUsNEJBQW9CLElBQVcsRUFBUyxnQkFBbUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7SUFDM0UsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSwrREFBK0Q7UUFDL0QsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qiw4REFBOEQ7UUFDOUQsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFFdEIsZ0NBQWdDO1FBRWhDLGtFQUFrRTtRQUNsRSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRWhELENBQUM7SUF4QjBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFrQixpQkFBVTsrREFBQztJQVI1QyxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBWTJCLFdBQUksRUFBNEIsb0NBQWdCO09BVmhFLGtCQUFrQixDQWlDOUI7SUFBRCx5QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbmNvbnN0IGNhcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3IDtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAgXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYXNoYm9hcmQuc2VydmljZVwiIDtcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEdyaWRJdGVtRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ncmlkLXZpZXdcIjtcbmltcG9ydCB7IENhcmREYXRhIH0gZnJvbSAnLi4vbW9kZWwvQ2FyZERhdGEnXG5pbXBvcnQgeyBHcmlkVmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3L2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG1haW5JbWFnZSA7XG4gIHB1YmxpYyBzZW5kZXJJbWFnZSA7XG4gIHB1YmxpYyBzZW5kZXJNZXNzYWdlIDtcbiAgcHVibGljIGRhc2hib2FyZERhdGE7XG4gIHB1YmxpYyBncmlkQ2FyZHMgOiBDYXJkRGF0YVtdIDtcbiAgXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50U3RhY2tcIikgY29udGVudFN0YWNrUmVmOiBFbGVtZW50UmVmOyBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2UgOiBQYWdlLHByaXZhdGUgZGFzaGJvYXJkU2VydmljZSA6IERhc2hib2FyZFNlcnZpY2UpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgLy8gbGV0IHN0YWNrID0gPFN0YWNrTGF5b3V0PnRoaXMuY29udGVudFN0YWNrUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gbGV0IGxhYmxlID0gbmV3IExhYmVsKCnDn1xuICAgIC8vIGxhYmxlLnRleHQgPSBcIlVqamFsXCI7XG4gICAgLy8gbGV0IGNhcmQxID0gZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLmdldFZpZXdDbGFzcyhcIkNhcmRWaWV3XCIpO1xuICAgIC8vIGxldCBjYXJkMiA9IG5ldyBjYXJkMSgpO1xuICAgIC8vIGxldCBnbCA9IG5ldyBHcmlkTGF5b3V0KCk7XG4gICAgLy8gZ2wuYWRkQ2hpbGQobGFibGUpO1xuXG4gICAgLy8gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmluaXQoKTtcblxuICAgIC8vIGxldCBncmlkbGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5jb250ZW50U3RhY2tSZWYubmF0aXZlRWxlbWVudFxuICAgIC8vIHRoaXMuZ3JpZENhcmRzID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIHRoaXMuZGFzaGJvYXJkRGF0YSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXREYXNoQm9hcmREYXRhKCk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLmRhc2hib2FyZERhdGEubWFpbkNhcmQubWFpbkltYWdlO1xuICAgIHRoaXMuc2VuZGVySW1hZ2UgPSB0aGlzLmRhc2hib2FyZERhdGEubWFpbkNhcmQuc2VuZGVySW1hZ2U7XG4gICAgdGhpcy5zZW5kZXJNZXNzYWdlID0gdGhpcy5kYXNoYm9hcmREYXRhLm1haW5DYXJkLnNlbmRlck1lc3NhZ2U7XG4gICAgdGhpcy5ncmlkQ2FyZHMgPSAgdGhpcy5kYXNoYm9hcmREYXRhLmdyaWRDYXJkO1xuICAgIFxuICB9XG59XG4iXX0=