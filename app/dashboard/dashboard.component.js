"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var dashboard_service_1 = require("../services/dashboard.service");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, dashboardService) {
        this.page = page;
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //let stack = <StackLayout>this.contentStackRef.nativeElement;
        // let lable = new Label()ß
        // lable.text = "Ujjal";
        // let card1 = elementRegistryModule.getViewClass("CardView");
        // let card2 = new card1();
        // let gl = new GridLayout();
        // gl.addChild(lable);
        // this.dashboardService.init();
        var gridlayout = this.contentStackRef.nativeElement;
        this.gridCards = new observable_array_1.ObservableArray();
        var dashboardData = this.dashboardService.getDashBoardData();
        this.mainImage = dashboardData.mainCard.mainImage;
        this.senderImage = dashboardData.mainCard.senderImage;
        this.senderMessage = dashboardData.mainCard.senderMessage;
        this.gridCards.push(dashboardData.gridCard);
        this.grid = new observable_1.Observable();
        this.grid.set("gridCards", this.gridCards);
        this.page.bindingContext = this.grid;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFJL0IsbUVBQWdFO0FBQ2hFLDhDQUF3RDtBQUN4RCwwREFBd0Q7QUFVeEQ7SUFhRSw0QkFBb0IsSUFBVyxFQUFTLGdCQUFtQztRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtJQUMzRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLDhEQUE4RDtRQUU5RCwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUV0QixnQ0FBZ0M7UUFFaEMsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUE7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUUxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFdkMsQ0FBQztJQS9CMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWtCLGlCQUFVOytEQUFDO0lBWDVDLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FlMkIsV0FBSSxFQUE0QixvQ0FBZ0I7T0FiaEUsa0JBQWtCLENBMkM5QjtJQUFELHlCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xuY29uc3QgY2FyZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcgO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2Rhc2hib2FyZC5zZXJ2aWNlXCIgO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgR3JpZEl0ZW1FdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdyaWQtdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbWFpbkltYWdlIDtcbiAgcHVibGljIHNlbmRlckltYWdlIDtcbiAgcHVibGljIHNlbmRlck1lc3NhZ2UgO1xuICAvL3B1YmxpYyBncmlkQ2FyZHMgO1xuXG4gIHB1YmxpYyBncmlkIDogT2JzZXJ2YWJsZTtcblxuICBwdWJsaWMgZ3JpZENhcmRzIDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50U3RhY2tcIikgY29udGVudFN0YWNrUmVmOiBFbGVtZW50UmVmOyBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2UgOiBQYWdlLHByaXZhdGUgZGFzaGJvYXJkU2VydmljZSA6IERhc2hib2FyZFNlcnZpY2UpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgLy9sZXQgc3RhY2sgPSA8U3RhY2tMYXlvdXQ+dGhpcy5jb250ZW50U3RhY2tSZWYubmF0aXZlRWxlbWVudDtcbiAgICBcbiAgICAvLyBsZXQgbGFibGUgPSBuZXcgTGFiZWwoKcOfXG4gICAgLy8gbGFibGUudGV4dCA9IFwiVWpqYWxcIjtcbiAgICAvLyBsZXQgY2FyZDEgPSBlbGVtZW50UmVnaXN0cnlNb2R1bGUuZ2V0Vmlld0NsYXNzKFwiQ2FyZFZpZXdcIik7XG4gICAgLy8gbGV0IGNhcmQyID0gbmV3IGNhcmQxKCk7XG4gICAgLy8gbGV0IGdsID0gbmV3IEdyaWRMYXlvdXQoKTtcbiAgICAvLyBnbC5hZGRDaGlsZChsYWJsZSk7XG5cbiAgICAvLyB0aGlzLmRhc2hib2FyZFNlcnZpY2UuaW5pdCgpO1xuXG4gICAgbGV0IGdyaWRsYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmNvbnRlbnRTdGFja1JlZi5uYXRpdmVFbGVtZW50XG4gICAgdGhpcy5ncmlkQ2FyZHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgbGV0IGRhc2hib2FyZERhdGEgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0RGFzaEJvYXJkRGF0YSgpO1xuICAgIHRoaXMubWFpbkltYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5tYWluSW1hZ2U7XG4gICAgdGhpcy5zZW5kZXJJbWFnZSA9IGRhc2hib2FyZERhdGEubWFpbkNhcmQuc2VuZGVySW1hZ2U7XG4gICAgdGhpcy5zZW5kZXJNZXNzYWdlID0gZGFzaGJvYXJkRGF0YS5tYWluQ2FyZC5zZW5kZXJNZXNzYWdlO1xuXG4gICAgdGhpcy5ncmlkQ2FyZHMucHVzaChkYXNoYm9hcmREYXRhLmdyaWRDYXJkKTtcblxuICAgIHRoaXMuZ3JpZCA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5ncmlkLnNldChcImdyaWRDYXJkc1wiLCB0aGlzLmdyaWRDYXJkcyk7XG5cbiAgICB0aGlzLnBhZ2UuYmluZGluZ0NvbnRleHQgPSB0aGlzLmdyaWQ7XG4gICAgXG4gIH1cbn1cbiJdfQ==