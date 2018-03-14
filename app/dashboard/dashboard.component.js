"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var card = require("nativescript-cardview").CardView;
var page_1 = require("ui/page");
var label_1 = require("ui/label");
var grid_layout_1 = require("ui/layouts/grid-layout");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page) {
        this.page = page;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this.item);
        var stack = this.contentStackRef.nativeElement;
        var lable = new label_1.Label();
        lable.text = "Ujjal";
        var card1 = elementRegistryModule.getViewClass("CardView");
        var card2 = new card1();
        var gl = new grid_layout_1.GridLayout();
        gl.addChild(lable);
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
        __metadata("design:paramtypes", [page_1.Page])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBRTtBQUN4RCxnQ0FBK0I7QUFDL0Isa0NBQWlDO0FBRWpDLHNEQUFxRDtBQU9yRDtJQUtFLDRCQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztJQUMvQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksS0FBSyxHQUFnQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUM1RCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQWYwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBa0IsaUJBQVU7K0RBQUM7SUFINUMsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQU0yQixXQUFJO09BTHBCLGtCQUFrQixDQW1COUI7SUFBRCx5QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbmNvbnN0IGNhcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3IDtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAgXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW0gOiBhbnk7XG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50U3RhY2tcIikgY29udGVudFN0YWNrUmVmOiBFbGVtZW50UmVmOyBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2UgOiBQYWdlKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbSk7XG4gICAgbGV0IHN0YWNrID0gPFN0YWNrTGF5b3V0PnRoaXMuY29udGVudFN0YWNrUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGxhYmxlID0gbmV3IExhYmVsKCk7XG4gICAgbGFibGUudGV4dCA9IFwiVWpqYWxcIjtcblxuICAgIGxldCBjYXJkMSA9IGVsZW1lbnRSZWdpc3RyeU1vZHVsZS5nZXRWaWV3Q2xhc3MoXCJDYXJkVmlld1wiKTtcbiAgICBsZXQgY2FyZDIgPSBuZXcgY2FyZDEoKTtcbiAgICBsZXQgZ2wgPSBuZXcgR3JpZExheW91dCgpO1xuICAgIGdsLmFkZENoaWxkKGxhYmxlKTtcbiAgfVxufVxuIl19