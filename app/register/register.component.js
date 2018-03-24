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
var sampleuser_1 = require("./sampleuser");
var Utils_1 = require("../utils/Utils");
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
        //  this.userData= {
        //    name : this.user.name,
        //    profile_pic : "",
        //    email : this.user.email,
        //    isOnline : true,
        //    firebaseID : "",
        //    QRcode : this.QRcode.generateBarcode(this.user.email),
        //    messages : "",
        //    isLoggedIn : true
        //  }
        //create demo user
        sampleuser_1.data.userdata.messages.pinky.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        sampleuser_1.data.userdata.messages.ujjal2.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        this.userData = {
            name: sampleuser_1.data.userdata.name,
            profile_pic: Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage()),
            email: sampleuser_1.data.userdata.email,
            isOnline: true,
            firebaseID: "ujjal1",
            QRcode: this.QRcode.generateBarcode(sampleuser_1.data.userdata.email),
            messages: sampleuser_1.data.userdata.messages,
            isLoggedIn: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFHckUsc0RBQTZEO0FBRTdELCtEQUE0RDtBQUM1RCw2REFBd0Q7QUFDeEQsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQUU3RCwyQ0FBbUM7QUFFbkMsd0NBQXNDO0FBUXRDO0lBU0UsMkJBQW9CLFNBQTZCLEVBQzdCLGdCQUFrQyxFQUNsQyxPQUF3QixFQUFVLE1BQXNCLEVBQ3hELG1CQUFzQztRQUh0QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDeEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQU5uRCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBUWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFFQyxDQUFDO0lBR0osMENBQTBDO0lBRXpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEyQkk7SUFFSCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELDZDQUFpQixHQUFqQjtRQUNFLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0MsMENBQWMsR0FBZCxVQUFlLE9BQU87UUFBdEIsaUJBa0NDO1FBakNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixPQUFPO2FBQ04sU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxTQUFTO1lBQ2YseUJBQXlCO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDM0IsMEJBQTBCO2dCQUN4QixRQUFRLENBQUMsUUFBUSxFQUFFO3FCQUNsQixJQUFJLENBQUMsVUFBQyxXQUFXO29CQUNoQixLQUFJLENBQUMsVUFBVTt3QkFDZixXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsZ0NBQWdDO1lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0Qsc0NBQVUsR0FBVjtRQUVFLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDREQUE0RDtRQUM1RCxvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLEtBQUs7UUFFTCxrQkFBa0I7UUFDbEIsaUJBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsYUFBSyxDQUFDLG9CQUFvQixDQUFDLGFBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLGlCQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLGFBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsSUFBSSxFQUFHLGlCQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDekIsV0FBVyxFQUFHLGFBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0QsS0FBSyxFQUFHLGlCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDM0IsUUFBUSxFQUFHLElBQUk7WUFDZixVQUFVLEVBQUcsUUFBUTtZQUNyQixNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsaUJBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELFFBQVEsRUFBRyxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQ2pDLFVBQVUsRUFBRyxJQUFJO1NBQ2xCLENBQUE7SUFHSCxDQUFDO0lBeklVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FVZ0Msd0NBQWlCO1lBQ1gseUJBQWdCO1lBQ3hCLGdDQUFjLEVBQW1CLDhCQUFhO1lBQ25DLHdCQUFpQjtPQVovQyxpQkFBaUIsQ0EySTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNJRCxJQTJJQztBQTNJWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vbW9kZWwvVXNlckRhdGEnO1xuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcblxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENvdWNoZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoZGIuc2VydmljZVwiXG5pbXBvcnQge1FyY29kZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL3NhbXBsZXVzZXJcIlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XG4gIHB1YmxpYyBwYXNzd29yZCA6IHN0cmluZztcbiAgcHVibGljIHVzZXJEYXRhIDogVXNlckRhdGE7XG4gIHB1YmxpYyBEb2NJZCA6IE51bWJlcjtcbiAgcHVibGljIGl0ZW1zID0gW107XG4gIHB1YmxpYyBwcm9maWxlUGljIDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlLCBwcml2YXRlIFFSY29kZSA6IFFyY29kZVNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckRhdGEoKVxuICAgIHRoaXMuaXRlbXNbMF0gPSBpbWFnZVNvdXJjZS5mcm9tRmlsZShcIn4vaW1hZ2UvcGVyc29uLmpwZ1wiKVxuICB9XG5cbiAgbmdPbkluaXQoKSA6dm9pZCB7XG4gICAgXG4gICB9XG5cblxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXG5cbiAvKiBzaWduVXAoKTogdm9pZFxuICB7XG4gIHRoaXMuZmJzZXJ2aWNlLnJlZ2lzdGVyVXNlcih7XG4gICAgIGVtYWlsIDogdGhpcy51c2VyLmVtYWlsLFxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcbiAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgXG4gICB0aGlzLmNyZWF0ZVVzZXIoKTtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsbFwiKTtcbiAgICB0b2FzdC5zaG93KCk7XG4gICAgdGhpcy5zaWduVXBDKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAvL3RoaXMudXNlci5lbWFpbCA9IEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSk7XG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJSZWdpc3RyYXRpb24gRmFpbGVkLlRyeSBsYXRlclwiKTtcbiAgICAgIHRvYXN0LnNob3coKTtcbiAgICB9XG4gICk7XG4gICBcbiAgfSovXG5cbiAgc2lnblVwKCk6IHZvaWR7XG4gICAgdGhpcy5jcmVhdGVVc2VyKCk7XG4gICAgdGhpcy5jb3VjaGRiLnNldFVzZXJEYXRhKHRoaXMudXNlckRhdGEpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNlbGVjdFNpbmdsZVRhcCgpIHtcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICB9KTtcbiAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xufVxuICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IF90aGF0ID0gdGhpcztcbiAgXG4gICAgY29udGV4dFxuICAgIC5hdXRob3JpemUoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgIH0pXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuICAgICAvLyBfdGhhdC5wcm9maWxlUGljID0gXCJcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTpcIik7XG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCk9PiB7XG4gICAgICAgIC8vICBfdGhhdC5wcm9maWxlUGljID0gXCJcIjtcbiAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpXG4gICAgICAgICAgLnRoZW4oKGltYWdlU291cmNlKSA9PntcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZVBpYyA9XG4gICAgICAgICAgICBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTsgLy8gTlVMTFxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVyaTogXCIgKyBzZWxlY3RlZC51cmkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlVXJpOiBcIiArIHNlbGVjdGVkLmZpbGVVcmkpO1xuICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIF90aGF0Lml0ZW1zID0gc2VsZWN0aW9uO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYyk7XG4gICAgICBcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpXG4gICAgICAgIF90aGF0Ll9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuICBcblxuICBjcmVhdGVVc2VyKCkgOiBhbnlcbiAge1xuICAgIC8vICB0aGlzLnVzZXJEYXRhPSB7XG4gICAgLy8gICAgbmFtZSA6IHRoaXMudXNlci5uYW1lLFxuICAgIC8vICAgIHByb2ZpbGVfcGljIDogXCJcIixcbiAgICAvLyAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcbiAgICAvLyAgICBpc09ubGluZSA6IHRydWUsXG4gICAgLy8gICAgZmlyZWJhc2VJRCA6IFwiXCIsXG4gICAgLy8gICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlci5lbWFpbCksXG4gICAgLy8gICAgbWVzc2FnZXMgOiBcIlwiLFxuICAgIC8vICAgIGlzTG9nZ2VkSW4gOiB0cnVlXG4gICAgLy8gIH1cblxuICAgIC8vY3JlYXRlIGRlbW8gdXNlclxuICAgIGRhdGEudXNlcmRhdGEubWVzc2FnZXMucGlua3kuaW1nID0gVXRpbHMuZ2VuZXJhdGVCYXNlNjRTdHJpbmcoVXRpbHMucmVhZEltYWdlKCkpO1xuICAgIGRhdGEudXNlcmRhdGEubWVzc2FnZXMudWpqYWwyLmltZyA9IFV0aWxzLmdlbmVyYXRlQmFzZTY0U3RyaW5nKFV0aWxzLnJlYWRJbWFnZSgpKTtcbiAgICBcbiAgICB0aGlzLnVzZXJEYXRhID0ge1xuICAgICAgbmFtZSA6IGRhdGEudXNlcmRhdGEubmFtZSxcbiAgICAgIHByb2ZpbGVfcGljIDogVXRpbHMuZ2VuZXJhdGVCYXNlNjRTdHJpbmcoVXRpbHMucmVhZEltYWdlKCkpLFxuICAgICAgZW1haWwgOiBkYXRhLnVzZXJkYXRhLmVtYWlsLFxuICAgICAgaXNPbmxpbmUgOiB0cnVlLFxuICAgICAgZmlyZWJhc2VJRCA6IFwidWpqYWwxXCIsXG4gICAgICBRUmNvZGUgOiB0aGlzLlFSY29kZS5nZW5lcmF0ZUJhcmNvZGUoZGF0YS51c2VyZGF0YS5lbWFpbCksXG4gICAgICBtZXNzYWdlcyA6IGRhdGEudXNlcmRhdGEubWVzc2FnZXMsXG4gICAgICBpc0xvZ2dlZEluIDogdHJ1ZVxuICAgIH1cblxuICAgXG4gIH1cbiAgIFxufVxuIl19