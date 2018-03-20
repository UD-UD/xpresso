"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchdb_service_1 = require("../services/couchdb.service");
var DashboardService = /** @class */ (function () {
    function DashboardService(couchdb) {
        this.couchdb = couchdb;
        this.modelData = {};
    }
    DashboardService.prototype.init = function () {
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
        var messages = this.couchdb.getMessages();
    };
    DashboardService.prototype.prepareMainCardData = function (message) {
        var firstMessage = message[0];
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrREFBNEQ7QUFHNUQ7SUFHRSwwQkFBcUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFFRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBRXpCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUdoQyxDQUFDO0lBbkJVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUlvQixnQ0FBYztPQUhsQyxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSB7XG5cbiAgbW9kZWxEYXRhIDogYW55XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSkgeyBcbiAgICB0aGlzLm1vZGVsRGF0YSA9e307XG4gIH1cblxuICBpbml0KCl7XG5cbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IHt9O1xuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XG4gIH1cblxuICBwcmVwYXJlTWFpbkNhcmREYXRhKG1lc3NhZ2Upe1xuXG4gICAgbGV0IGZpcnN0TWVzc2FnZSA9IG1lc3NhZ2VbMF07XG5cblxuICB9XG59XG4iXX0=