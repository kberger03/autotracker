"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// autotracker
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var core_2 = require("angular2-google-maps/core");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var login_1 = require("./login/login");
var signup_1 = require("./signup/signup");
var profile_1 = require("./profile/profile");
var maintAct_1 = require("./maintAct/maintAct");
var timeline_1 = require("./timeline/timeline");
var addVehicleModal_1 = require("./addVehicleModal/addVehicleModal");
var addActiveModal_1 = require("./addActiveModal/addActiveModal");
var navbar_1 = require("./navbar/navbar");
var navbar2_1 = require("./navbar2/navbar2");
var navbar3_1 = require("./navbar3/navbar3");
var users_service_1 = require("./services/users.service");
var auth_service_1 = require("./services/auth.service");
var vehicles_service_1 = require("./services/vehicles.service");
var actives_service_1 = require("./services/actives.service");
// Routes to jump to 
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'profile', component: profile_1.ProfileComponent },
    { path: 'maintact', component: maintAct_1.MaintActComponent },
    { path: 'timeline', component: timeline_1.TimelineComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            forms_1.FormsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDCr2_3X_DxJADKn21Qq4VvPAN970ADHrI'
                // apiKey: 'AIzaSyCA-S4XiJZQ8xXUibPzrsn1efJIe6sBoyc'//old key 
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            signup_1.SignupComponent,
            profile_1.ProfileComponent,
            maintAct_1.MaintActComponent,
            timeline_1.TimelineComponent,
            addVehicleModal_1.addVehicleModalComponent,
            addActiveModal_1.addActiveModalComponent,
            navbar_1.navbarComponent,
            navbar2_1.navbar2Component,
            navbar3_1.navbar3Component
        ],
        providers: [
            users_service_1.UsersService,
            auth_service_1.AuthService,
            vehicles_service_1.VehiclesService,
            actives_service_1.ActivesService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
