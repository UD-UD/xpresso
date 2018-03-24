"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var imagepicker = require("nativescript-imagepicker");
var imageSource = require("tns-core-modules/image-source");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb, QRcode, _changeDetectionRef) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.items = [];
        this.user = new UserData_1.UserData();
        this.items[0] = imageSource.fromFile("~/image/person.jpg");
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // uncomment when using restration feature
    /* signUp(): void
     {
     this.fbservice.registerUser({
        email : this.user.email,
        password : this.password
      }).then(result => {
       //this.user.email = JSON.stringify(result);
       
      this.createUser();
       const toast = new Toasty("Registration Succesfull");
       toast.show();
       this.signUpC();
       this.routerExtensions.navigate(["/profile"], {
           transition: {
               name: "fade",
               duration: 2000,
               curve: "linear"
           }
         });
       },
       errorMessage => {
         //this.user.email = JSON.stringify(errorMessage);
         const toast = new Toasty("Registration Failed.Try later");
         toast.show();
       }
     );
      
     }*/
    RegisterComponent.prototype.signUp = function () {
        this.createUser();
        this.couchdb.setUserData(this.userData);
        this.routerExtensions.navigate(["/profile"], {
            transition: {
                name: "fade",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    RegisterComponent.prototype.onSelectSingleTap = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    RegisterComponent.prototype.startSelection = function (context) {
        var _this = this;
        var _that = this;
        context
            .authorize()
            .then(function () {
            _that.items = [];
            return context.present();
        })
            .then(function (selection) {
            // _that.profilePic = "";
            console.log("Selection done:");
            selection.forEach(function (selected) {
                //  _that.profilePic = "";
                selected.getImage()
                    .then(function (imageSource) {
                    _this.profilePic =
                        imageSource.toBase64String("jpg"); // NULL
                    console.log(_this.profilePic);
                });
                console.log("----------------");
                console.log("uri: " + selected.uri);
                console.log("fileUri: " + selected.fileUri);
                console.log(_this.profilePic);
            });
            _that.items = selection;
            // console.log(this.profilePic);
            console.log(_this.profilePic);
            _that._changeDetectionRef.detectChanges();
        }).catch(function (e) {
            console.log(e);
        });
    };
    RegisterComponent.prototype.createUser = function () {
        this.userData = {
            name: this.user.name,
            profile_pic: this.profilePic,
            email: this.user.email,
            isOnline: true,
            firebaseID: "",
            QRcode: this.QRcode.generateBarcode(this.user.email),
            messages: "",
            isLoggedIn: true
            //  DocId : this.DocId
        };
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService,
            router_1.RouterExtensions,
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService,
            core_1.ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFDeEQsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQVE3RDtJQVNFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFObkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVFoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUdKLDBDQUEwQztJQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkJJO0lBRUgsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFB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SDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNIRCxJQTJIQztBQTNIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHB1YmxpYyB1c2VyOiBVc2VyRGF0YTtcclxuICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XHJcbiAgcHVibGljIERvY0lkIDogTnVtYmVyO1xyXG4gIHB1YmxpYyBpdGVtcyA9IFtdO1xyXG4gIHB1YmxpYyBwcm9maWxlUGljIDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZic2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlICxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3VjaGRiIDogQ291Y2hkYlNlcnZpY2UsIHByaXZhdGUgUVJjb2RlIDogUXJjb2RlU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyRGF0YSgpXHJcbiAgICB0aGlzLml0ZW1zWzBdID0gaW1hZ2VTb3VyY2UuZnJvbUZpbGUoXCJ+L2ltYWdlL3BlcnNvbi5qcGdcIilcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgOnZvaWQge1xyXG4gICAgXHJcbiAgIH1cclxuXHJcblxyXG4vLyB1bmNvbW1lbnQgd2hlbiB1c2luZyByZXN0cmF0aW9uIGZlYXR1cmVcclxuXHJcbiAvKiBzaWduVXAoKTogdm9pZFxyXG4gIHtcclxuICB0aGlzLmZic2VydmljZS5yZWdpc3RlclVzZXIoe1xyXG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxyXG4gICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxyXG4gICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICBcclxuICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcclxuICAgIHRvYXN0LnNob3coKTtcclxuICAgIHRoaXMuc2lnblVwQygpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBlcnJvck1lc3NhZ2UgPT4ge1xyXG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBGYWlsZWQuVHJ5IGxhdGVyXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICAgXHJcbiAgfSovXHJcblxyXG4gIHNpZ25VcCgpOiB2b2lke1xyXG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICB0aGlzLmNvdWNoZGIuc2V0VXNlckRhdGEodGhpcy51c2VyRGF0YSk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGVcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxufVxyXG4gIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgIGxldCBfdGhhdCA9IHRoaXM7XHJcbiAgXHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgLy8gX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTpcIik7XHJcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKT0+IHtcclxuICAgICAgICAvLyAgX3RoYXQucHJvZmlsZVBpYyA9IFwiXCI7XHJcbiAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpXHJcbiAgICAgICAgICAudGhlbigoaW1hZ2VTb3VyY2UpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVQaWMgPVxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTsgLy8gTlVMTFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJpOiBcIiArIHNlbGVjdGVkLnVyaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZVVyaTogXCIgKyBzZWxlY3RlZC5maWxlVXJpKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBfdGhhdC5pdGVtcyA9IHNlbGVjdGlvbjtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XHJcbiAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKVxyXG4gICAgICAgIF90aGF0Ll9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIFxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY3JlYXRlVXNlcigpIDogYW55XHJcbiAge1xyXG4gICAgIHRoaXMudXNlckRhdGE9IHtcclxuICAgICAgIG5hbWUgOiB0aGlzLnVzZXIubmFtZSxcclxuICAgICAgIHByb2ZpbGVfcGljIDogdGhpcy5wcm9maWxlUGljLFxyXG4gICAgICAgZW1haWwgOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgICBpc09ubGluZSA6IHRydWUsXHJcbiAgICAgICBmaXJlYmFzZUlEIDogXCJcIixcclxuICAgICAgIFFSY29kZSA6IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXIuZW1haWwpLFxyXG4gICAgICAgbWVzc2FnZXMgOiBcIlwiLFxyXG4gICAgICAgaXNMb2dnZWRJbiA6IHRydWVcclxuICAgICAvLyAgRG9jSWQgOiB0aGlzLkRvY0lkXHJcbiAgICAgfVxyXG4gIH1cclxuICAgXHJcbn1cclxuIl19