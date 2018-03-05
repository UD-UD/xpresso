"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchbaseModule = require("nativescript-couchbase");
var CouchbaseDbService = /** @class */ (function () {
    //  public profile : any
    function CouchbaseDbService() {
        this.database = new couchbaseModule.Couchbase("data");
    }
    CouchbaseDbService.prototype.createDB = function (profile) {
        this.documentId = this.database.createDocument(profile);
        console.log(JSON.stringify(this.documentId));
        return this.documentId;
    };
    CouchbaseDbService.prototype.getDoc = function (docId) {
        return (this.database.getDocument(docId));
    };
    CouchbaseDbService.prototype.updateDoc = function (docId) {
        return this.database.updateDocument(this.documentId, {
            firstname: "Nicolas"
        });
    };
    CouchbaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseDbService);
    return CouchbaseDbService;
}());
exports.CouchbaseDbService = CouchbaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2gtYmFzZS1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2gtYmFzZS1kYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBQzNDLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBSXhEO0lBSUUsd0JBQXdCO0lBRXhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFeEQsQ0FBQztJQUNELHFDQUFRLEdBQVIsVUFBUyxPQUFPO1FBRWYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNELG1DQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1osTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsc0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDZixNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsRCxTQUFTLEVBQUUsU0FBUztTQUV2QixDQUFDLENBQUM7SUFFSCxDQUFDO0lBekJVLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFOztPQUNBLGtCQUFrQixDQTRCNUI7SUFBRCx5QkFBQztDQUFBLEFBNUJILElBNEJHO0FBNUJVLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbnZhciBjb3VjaGJhc2VNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3VjaGJhc2VEYlNlcnZpY2Uge1xyXG4gICAgcHVibGljIGRhdGFiYXNlIDogYW55XHJcbiBcclxuICAgIHB1YmxpYyBkb2N1bWVudElkIDphbnlcclxuICAvLyAgcHVibGljIHByb2ZpbGUgOiBhbnlcclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgY291Y2hiYXNlTW9kdWxlLkNvdWNoYmFzZShcImRhdGFcIik7XHJcbiAgXHJcbiAgfVxyXG4gIGNyZWF0ZURCKHByb2ZpbGUpIDogYW55e1xyXG4gXHJcbiAgIHRoaXMuZG9jdW1lbnRJZCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQocHJvZmlsZSlcclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kb2N1bWVudElkKSk7XHJcbnJldHVybiB0aGlzLmRvY3VtZW50SWQ7XHJcbiAgfVxyXG4gIGdldERvYyhkb2NJZCkgOiBhbnl7XHJcbiAgcmV0dXJuKHRoaXMuZGF0YWJhc2UuZ2V0RG9jdW1lbnQoZG9jSWQpKTtcclxuICB9XHJcbiAgdXBkYXRlRG9jKGRvY0lkKTogYW55IHtcclxuICByZXR1cm4gIHRoaXMuZGF0YWJhc2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2N1bWVudElkLCB7XHJcbiAgICAgIGZpcnN0bmFtZTogXCJOaWNvbGFzXCJcclxuICAgICBcclxuICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuIl19