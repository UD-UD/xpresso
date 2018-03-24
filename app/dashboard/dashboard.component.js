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
        var stack = this.contentStackRef.nativeElement;
        stack.backgroundImage = "";
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
        // this.mainImage = this.dashboardData.mainCard.mainImage;
        // this.senderImage = this.dashboardData.mainCard.senderImage;
        // this.senderMessage = this.dashboardData.mainCard.senderMessage;
        // this.gridCards =  this.dashboardData.gridCard;
        stack.background = this.dashboardData.mainCard.mainImage;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBY2hFO0lBVUUsNEJBQW9CLElBQVcsRUFBUyxnQkFBbUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7SUFDM0UsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLEtBQUssR0FBZSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUMzRCxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUV0QixnQ0FBZ0M7UUFFaEMsa0VBQWtFO1FBQ2xFLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlELDBEQUEwRDtRQUMxRCw4REFBOEQ7UUFDOUQsa0VBQWtFO1FBQ2xFLGlEQUFpRDtRQUVqRCxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUUzRCxDQUFDO0lBM0IwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBa0IsaUJBQVU7K0RBQUM7SUFSNUMsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQVkyQixXQUFJLEVBQTRCLG9DQUFnQjtPQVZoRSxrQkFBa0IsQ0FvQzlCO0lBQUQseUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5jb25zdCBjYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyA7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2VcIiA7XG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBHcmlkSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3XCI7XG5pbXBvcnQgeyBDYXJkRGF0YSB9IGZyb20gJy4uL21vZGVsL0NhcmREYXRhJ1xuaW1wb3J0IHsgR3JpZFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdyaWQtdmlldy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBtYWluSW1hZ2UgO1xuICBwdWJsaWMgc2VuZGVySW1hZ2UgO1xuICBwdWJsaWMgc2VuZGVyTWVzc2FnZSA7XG4gIHB1YmxpYyBkYXNoYm9hcmREYXRhO1xuICBwdWJsaWMgZ3JpZENhcmRzIDogQ2FyZERhdGFbXSA7XG4gIFxuICBAVmlld0NoaWxkKFwiY29udGVudFN0YWNrXCIpIGNvbnRlbnRTdGFja1JlZjogRWxlbWVudFJlZjsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSxwcml2YXRlIGRhc2hib2FyZFNlcnZpY2UgOiBEYXNoYm9hcmRTZXJ2aWNlKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIGxldCBzdGFjayA9IDxHcmlkTGF5b3V0PnRoaXMuY29udGVudFN0YWNrUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgc3RhY2suYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICAvLyBsZXQgbGFibGUgPSBuZXcgTGFiZWwoKcOfXG4gICAgLy8gbGFibGUudGV4dCA9IFwiVWpqYWxcIjtcbiAgICAvLyBsZXQgY2FyZDEgPSBlbGVtZW50UmVnaXN0cnlNb2R1bGUuZ2V0Vmlld0NsYXNzKFwiQ2FyZFZpZXdcIik7XG4gICAgLy8gbGV0IGNhcmQyID0gbmV3IGNhcmQxKCk7XG4gICAgLy8gbGV0IGdsID0gbmV3IEdyaWRMYXlvdXQoKTtcbiAgICAvLyBnbC5hZGRDaGlsZChsYWJsZSk7XG5cbiAgICAvLyB0aGlzLmRhc2hib2FyZFNlcnZpY2UuaW5pdCgpO1xuXG4gICAgLy8gbGV0IGdyaWRsYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50XG4gICAgLy8gdGhpcy5ncmlkQ2FyZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgdGhpcy5kYXNoYm9hcmREYXRhID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hCb2FyZERhdGEoKTtcbiAgICAvLyB0aGlzLm1haW5JbWFnZSA9IHRoaXMuZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5tYWluSW1hZ2U7XG4gICAgLy8gdGhpcy5zZW5kZXJJbWFnZSA9IHRoaXMuZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5zZW5kZXJJbWFnZTtcbiAgICAvLyB0aGlzLnNlbmRlck1lc3NhZ2UgPSB0aGlzLmRhc2hib2FyZERhdGEubWFpbkNhcmQuc2VuZGVyTWVzc2FnZTtcbiAgICAvLyB0aGlzLmdyaWRDYXJkcyA9ICB0aGlzLmRhc2hib2FyZERhdGEuZ3JpZENhcmQ7XG5cbiAgICBzdGFjay5iYWNrZ3JvdW5kID0gdGhpcy5kYXNoYm9hcmREYXRhLm1haW5DYXJkLm1haW5JbWFnZTtcbiAgICBcbiAgfVxufVxuIl19