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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBY2hFO0lBVUUsNEJBQW9CLElBQVcsRUFBUyxnQkFBbUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7SUFDM0UsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSwrREFBK0Q7UUFDL0QsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qiw4REFBOEQ7UUFDOUQsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFFdEIsZ0NBQWdDO1FBRWhDLGtFQUFrRTtRQUNsRSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRWhELENBQUM7SUF4QjBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFrQixpQkFBVTsrREFBQztJQVI1QyxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBWTJCLFdBQUksRUFBNEIsb0NBQWdCO09BVmhFLGtCQUFrQixDQWlDOUI7SUFBRCx5QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbmNvbnN0IGNhcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3IDtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2VcIiA7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBHcmlkSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3XCI7XHJcbmltcG9ydCB7IENhcmREYXRhIH0gZnJvbSAnLi4vbW9kZWwvQ2FyZERhdGEnXHJcbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ncmlkLXZpZXcvYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1kYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIG1haW5JbWFnZSA7XHJcbiAgcHVibGljIHNlbmRlckltYWdlIDtcclxuICBwdWJsaWMgc2VuZGVyTWVzc2FnZSA7XHJcbiAgcHVibGljIGRhc2hib2FyZERhdGE7XHJcbiAgcHVibGljIGdyaWRDYXJkcyA6IENhcmREYXRhW10gO1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50U3RhY2tcIikgY29udGVudFN0YWNrUmVmOiBFbGVtZW50UmVmOyBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSxwcml2YXRlIGRhc2hib2FyZFNlcnZpY2UgOiBEYXNoYm9hcmRTZXJ2aWNlKSB7IFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgLy8gbGV0IHN0YWNrID0gPFN0YWNrTGF5b3V0PnRoaXMuY29udGVudFN0YWNrUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyBsZXQgbGFibGUgPSBuZXcgTGFiZWwoKcOfXHJcbiAgICAvLyBsYWJsZS50ZXh0ID0gXCJVamphbFwiO1xyXG4gICAgLy8gbGV0IGNhcmQxID0gZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLmdldFZpZXdDbGFzcyhcIkNhcmRWaWV3XCIpO1xyXG4gICAgLy8gbGV0IGNhcmQyID0gbmV3IGNhcmQxKCk7XHJcbiAgICAvLyBsZXQgZ2wgPSBuZXcgR3JpZExheW91dCgpO1xyXG4gICAgLy8gZ2wuYWRkQ2hpbGQobGFibGUpO1xyXG5cclxuICAgIC8vIHRoaXMuZGFzaGJvYXJkU2VydmljZS5pbml0KCk7XHJcblxyXG4gICAgLy8gbGV0IGdyaWRsYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAvLyB0aGlzLmdyaWRDYXJkcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIHRoaXMuZGFzaGJvYXJkRGF0YSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXREYXNoQm9hcmREYXRhKCk7XHJcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMuZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5tYWluSW1hZ2U7XHJcbiAgICB0aGlzLnNlbmRlckltYWdlID0gdGhpcy5kYXNoYm9hcmREYXRhLm1haW5DYXJkLnNlbmRlckltYWdlO1xyXG4gICAgdGhpcy5zZW5kZXJNZXNzYWdlID0gdGhpcy5kYXNoYm9hcmREYXRhLm1haW5DYXJkLnNlbmRlck1lc3NhZ2U7XHJcbiAgICB0aGlzLmdyaWRDYXJkcyA9ICB0aGlzLmRhc2hib2FyZERhdGEuZ3JpZENhcmQ7XHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19