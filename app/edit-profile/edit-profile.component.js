"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var couchdb_service_1 = require("../services/couchdb.service");
var router_1 = require("nativescript-angular/router");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(routerExtensions, couchdb) {
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.user = new UserData_1.UserData();
        this.rows = this.couchdb.getCouchData();
        console.log(JSON.stringify(this.rows));
        this.userdata = this.rows[0].userdata;
        this.user.name = this.userdata.name;
        this.user.profile_pic = this.userdata.profile_pic;
        this.user.email = this.userdata.email;
        this.user.isOnline = this.userdata.isOnline;
        this.user.firebaseID = this.userdata.firebaseID;
        this.user.QRcode = this.userdata.QRcode;
        this.user.messages = this.userdata.messages;
        this.user.isLoggedIn = this.userdata.isLoggedIn;
        this.docId = this.rows[0]._id;
        //this.user.docId = this.userdata.DocId;
        console.log(this.user.name);
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.rows = this.couchdb.getCouchData();
        console.log(JSON.stringify(this.rows));
    };
    EditProfileComponent.prototype.update = function () {
        this.userData = {
            name: this.user.name,
            profile_pic: "",
            email: this.user.email,
            isOnline: true,
            firebaseID: "",
            QRcode: this.user.QRcode,
            messages: "",
            isLoggedIn: true,
        };
        this.couchdb.updateUserData(this.docId, this.userData);
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            couchdb_service_1.CouchdbService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsOENBQTZDO0FBQzdDLCtEQUE0RDtBQUM1RCxzREFBNkQ7QUFRN0Q7SUFPRSw4QkFBb0IsZ0JBQWtDLEVBQzVDLE9BQXdCO1FBRGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1QyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2hDLHdDQUF3QztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVKLHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBR3hDLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRTtZQUNiLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsV0FBVyxFQUFHLEVBQUU7WUFDaEIsS0FBSyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN2QixRQUFRLEVBQUcsSUFBSTtZQUNmLFVBQVUsRUFBRyxFQUFFO1lBQ2YsTUFBTSxFQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUMxQixRQUFRLEVBQUcsRUFBRTtZQUNiLFVBQVUsRUFBRyxJQUFJO1NBR2xCLENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBakRVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDO3lDQVFzQyx5QkFBZ0I7WUFDbEMsZ0NBQWM7T0FSdkIsb0JBQW9CLENBb0RoQztJQUFELDJCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWVkaXQtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgIHB1YmxpYyB1c2VyIDogYW55O1xuICAgICBwdWJsaWMgcm93cyA6IGFueTtcbiAgICAgcHVibGljIHVzZXJkYXRhIDogYW55O1xuICAgICBwdWJsaWMgZG9jSWQgOiBhbnk7XG4gICAgIHB1YmxpYyB1c2VyRGF0YSA6IFVzZXJEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSkge1xuXG4gICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxuICAgICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGRiLmdldENvdWNoRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICAgICB0aGlzLnVzZXJkYXRhID10aGlzLnJvd3NbMF0udXNlcmRhdGE7XG4gICAgICB0aGlzLnVzZXIubmFtZSA9IHRoaXMudXNlcmRhdGEubmFtZTtcbiAgICAgIHRoaXMudXNlci5wcm9maWxlX3BpYyA9IHRoaXMudXNlcmRhdGEucHJvZmlsZV9waWM7XG4gICAgICB0aGlzLnVzZXIuZW1haWwgPSB0aGlzLnVzZXJkYXRhLmVtYWlsO1xuICAgICAgdGhpcy51c2VyLmlzT25saW5lID0gdGhpcy51c2VyZGF0YS5pc09ubGluZTtcbiAgICAgIHRoaXMudXNlci5maXJlYmFzZUlEID0gdGhpcy51c2VyZGF0YS5maXJlYmFzZUlEO1xuICAgICAgdGhpcy51c2VyLlFSY29kZSA9IHRoaXMudXNlcmRhdGEuUVJjb2RlO1xuICAgICAgdGhpcy51c2VyLm1lc3NhZ2VzID0gdGhpcy51c2VyZGF0YS5tZXNzYWdlcztcbiAgICAgIHRoaXMudXNlci5pc0xvZ2dlZEluID0gdGhpcy51c2VyZGF0YS5pc0xvZ2dlZEluO1xuICAgICAgdGhpcy5kb2NJZCA9IHRoaXMucm93c1swXS5faWQ7XG4gICAgLy90aGlzLnVzZXIuZG9jSWQgPSB0aGlzLnVzZXJkYXRhLkRvY0lkO1xuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLm5hbWUpXG4gICAgIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5yb3dzID0gdGhpcy5jb3VjaGRiLmdldENvdWNoRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICBcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZSgpXG4gIHtcbiAgICB0aGlzLnVzZXJEYXRhPSB7XG4gICAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXG4gICAgICBwcm9maWxlX3BpYyA6IFwiXCIsXG4gICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgIGlzT25saW5lIDogdHJ1ZSxcbiAgICAgIGZpcmViYXNlSUQgOiBcIlwiLFxuICAgICAgUVJjb2RlIDogIHRoaXMudXNlci5RUmNvZGUsXG4gICAgICBtZXNzYWdlcyA6IFwiXCIsXG4gICAgICBpc0xvZ2dlZEluIDogdHJ1ZSxcbiAgICAvLyAgRG9jSWQgOiB0aGlzLnVzZXIuZG9jSWRcblxuICAgIH1cbiAgICB0aGlzLmNvdWNoZGIudXBkYXRlVXNlckRhdGEodGhpcy5kb2NJZCwgdGhpcy51c2VyRGF0YSk7XG4gIH1cblxuXG59XG4iXX0=