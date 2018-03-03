"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchbaseModule = require("nativescript-couchbase");
var CouchbaseDbService = /** @class */ (function () {
    function CouchbaseDbService() {
    }
    CouchbaseDbService.prototype.createDB = function () {
        this.database = new couchbaseModule.Couchbase("test-database");
        this.documentId = this.database.createDocument({
            "firstname": "Nic",
            "lastname": "Raboy",
            "address": {
                "city": "San Francisco",
                "state": "CA",
                "country": "USA"
            },
            "twitter": "https://www.twitter.com/nraboy"
        });
        console.log(this.documentId);
    };
    CouchbaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseDbService);
    return CouchbaseDbService;
}());
exports.CouchbaseDbService = CouchbaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2gtYmFzZS1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2gtYmFzZS1kYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBQzNDLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBSXhEO0lBSUU7SUFFQSxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDOUMsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLE9BQU87WUFDbkIsU0FBUyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsS0FBSzthQUNuQjtZQUNELFNBQVMsRUFBRSxnQ0FBZ0M7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXBCVSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTs7T0FDQSxrQkFBa0IsQ0F5QjVCO0lBQUQseUJBQUM7Q0FBQSxBQXpCSCxJQXlCRztBQXpCVSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG52YXIgY291Y2hiYXNlTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIik7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ291Y2hiYXNlRGJTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBkYXRhYmFzZSA6IGFueVxyXG4gICAgcHVibGljIGRvY3VtZW50SWQgOiBhbnlcclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIFxyXG4gIH1cclxuICBjcmVhdGVEQigpIDogdm9pZHtcclxuICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgY291Y2hiYXNlTW9kdWxlLkNvdWNoYmFzZShcInRlc3QtZGF0YWJhc2VcIik7XHJcbiAgIHRoaXMuZG9jdW1lbnRJZCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xyXG4gICAgXCJmaXJzdG5hbWVcIjogXCJOaWNcIixcclxuICAgIFwibGFzdG5hbWVcIjogXCJSYWJveVwiLFxyXG4gICAgXCJhZGRyZXNzXCI6IHtcclxuICAgICAgICBcImNpdHlcIjogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICAgICAgXCJzdGF0ZVwiOiBcIkNBXCIsXHJcbiAgICAgICAgXCJjb3VudHJ5XCI6IFwiVVNBXCJcclxuICAgIH0sXHJcbiAgICBcInR3aXR0ZXJcIjogXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9ucmFib3lcIlxyXG59KTtcclxuY29uc29sZS5sb2codGhpcy5kb2N1bWVudElkKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiJdfQ==